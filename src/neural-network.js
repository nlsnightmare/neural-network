import Matrix from './matrix';

function relu(item) {
    return Math.max(item/10,item);
}


function softmax(arr) {
    return arr.map(function(value,index) { 
	return Math.exp(value) /
	    arr.map( function(y){ return Math.exp(y); } ).reduce( function(a,b){ return a+b; });
    });
}


export default class NeuralNetwork {
    constructor(...args){
	let inputs, outputs, hidden;
	if (typeof args[0] == 'object') {
	    inputs = args[0].inputs;
	    hidden = args[0].hidden.slice(0);
	    outputs = args[0].outputs;
	    hidden.push(outputs);
	}
	else {
	    inputs = args[0];
	    hidden = args[1];
	    outputs = args[2];
	}
	this.score = 0;
	this.inputs = inputs;
	this.outputs = outputs;

	this.layers = [];


	this.layers.push(new Matrix(inputs + 1, hidden[0]));
	for (let i = 1; i < hidden.length; i++) {
	    this.layers.push(new Matrix(this.layers[i - 1].m + 1, hidden[i - 1]));
	}
	this.layers.forEach((l) => l.randomize());
    }

    compute(input){
	let inputs = input.slice(0);

	let max = Math.max(...inputs);
	if (max == 0) {
	    max = 1;
	}

	inputs = inputs.map((v) => v / max);
	inputs.push(1); // Add the bias


	let input_matrix = new Matrix(1,inputs.length);
	input_matrix.data = inputs;


	let res;
	let i;
	for (i = 0; i < this.layers.length - 1; i++) {
	    let layer = this.layers[i];
	    
	    res = input_matrix.mul(layer);
	    res = res.transpose();
	    res.data.push(1);
	    res.m++;
	    res.data = res.data.map(relu);
	}

	let res2 = res.mul(this.layers[i]);
	let percentages = softmax(res2.data);
	i = percentages.indexOf(Math.max(...percentages));

	return {
	    percentages,
	    max: i
	};
    }

    getGenes(){
	return this.layer1.data.concat(this.outputLayer.data);
    }

    setGenes(genes){
	let layer1 = genes.slice(0,this.layer1.size);
	let outputGenes = genes.slice(this.layer1.size + 1,this.layer1.size + this.outputLayer.size);

	this.layer1.data = layer1;
	this.outputLayer.data = outputGenes;
    }


}
