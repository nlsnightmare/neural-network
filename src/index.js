import NeuralNetwork from './neural-network';

let v1 = document.getElementById('v1');
let v2 = document.getElementById('v2');
let btn = document.getElementById('test');
let res = document.getElementById('res');
let other = document.getElementById('other');

let NUM_NETS = 100;
// let NUM_NETS = 1;
let NUM_GENS = 1000;
// let NUM_GENS = 1;
let i = 0;

let networks = [];

let testingData = [
    [0,0],
    [0,1],
    [1,0],
    [1,1]
];

let NetworkStructure = {
    inputs: 2,
    hidden: [2],
    outputs: 2,
    normalizeInput: true,
    normalizeOutput: true
};


function xor(arr) {
    return ( arr[0] && !arr[1] ) || ( arr[1] && !arr[0] );
}


window.onload = () => {
    res.textContent = 'Generating Networks...';
    for( let i = 0; i < NUM_NETS; i++){
	networks.push(new NeuralNetwork(NetworkStructure));
    }


    btn.onclick = () => {
	let n1 = Number( v1.value );
	let n2 = Number( v2.value );
	let r = networks[0].compute([n1,n2]);
	let perc = r.percentages.map((p) => (p*100).toFixed(2));
	res.textContent = 'I am ' + perc[r.max] + '% sure that ';
	res.textContent += `XOR(${n1},${n2}) = ${r.max}`;
	res.textContent += ` ${( r.max == xor([ n1,n2 ])?' ':'not ' )}Correct!`;
    };

    requestAnimationFrame(train);
};


let speed = 10;
function train() {
    res.textContent = 'Training generation ' + i;
    for(let g = 0; g < speed; g++){
	
	for (let net of networks) {
	    net.score = 0;

	    for (let data of testingData) {
		let ret = net.compute(data);
		if (ret.max == xor(data))
		    net.score += 5;
		else net.score -=2;
	    }
	}
	networks.sort((a,b) => b.score - a.score);

	networks = networks.filter((net,i) => i < 50);
	for(let i = 0; i < 50; i++){
	    networks.push(new NeuralNetwork(NetworkStructure));
	}
	i++;
    }

    if (i <= NUM_GENS) {
	requestAnimationFrame(train);
    }
    else{
	res.textContent = 'Network finished training';
    }
}

