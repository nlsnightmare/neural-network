export default class Matrix {
    constructor(n,m) {
	this.n = n;
	this.m = m;
	this.data = new Array(n * m);
	this.size = n * m;

	// By default, return an identity matrix
	for( let x = 0; x < n; x++){
	    for( let y = 0; y < m; y++){
		if (x == y)
		    this.setItem(x,y,1);
		else
		    this.setItem(x,y,0);
	    }
	}
    }

    toArray(){
	return this.data;
    }

    transpose(){
	throw new Error("Not implemented yet!");
    }

    static zero(n,m){
	let mat = new Matrix(n,m);
	for( let i = 0; i < mat.data.length; i++){
	    mat.data[i] = 0;
	}
	return mat;
    }
    loadData(data){
	if (data.length != this.data.length) {
	    throw new Error("Matrix data should be exactly " + this.n * this.m);
	}
	for( let i = 0; i < data.length; i++){
	    this.data[i] = data[i];
	}
    }

    display(){
	for( let x = 0; x < this.n; x++){
	    for( let y = 0; y < this.m; y++){
		console.log(`(${x},${y}) =>`,this.getItem(x,y));
	    }
	}
    }

    setItem(x,y,val){
	if (this.m == 1) {
	    let idx = y;
	    this.data[idx] = val;
	    return;
	}
	this.data[x + y * this.n] = val;
    }

    getItem(x,y){
	return this.data[x + y * this.n];
    }

    randomize(){
	for(let i = 0; i < this.data.length; i++){
	    this.data[i] = ( Math.random() * 2 ) - 1;
	}
    }

    copy(){
	let n = new Matrix(this.n, this.m);
	for( let i = 0; i < this.data.length; i++){
	    n.data[i] = this.data[i];
	}

	return n;
    }

    add(num){
	for(let i = 0; i < this.data.length; i++){
	    this.data[i] += num;
	}
    }

    mul(other){
	if (this.m != other.n) {
	    throw new Error(`Trying to multiply a (${this.n},${this.m}) matrix with a (${other.n},${other.m})`);
	}
	let res = Matrix.zero(other.m, this.n);

	for(let i = 0; i < this.n; i++){
	    for(let j = 0; j < other.m; j++){
		let sum = 0;
		for(let k = 0; k < this.m; k++){
		    sum += this.getItem(i,k) * other.getItem(k,j);
		}
		res.setItem(i,j,sum);
	    }
	}


	return res;
    }
}


function testMatrixMultiplication(){
    console.log('Starting Matrix multiplication tests...');

    let correct;
    let m, m2, res;
    function verify(mat,corr) {
	const data = mat.data;
	if (mat.data.length != corr.length) {
	    throw new Error('matrix multiplication is broken: Incorrect matrix size');
	}
	for( let i = 0; i < data.length; i++){
	    if (data[i] != corr[i]) {
		throw new Error('matrix multiplication is broken');
	    }
	}
    }

    correct = [13];
    m = new Matrix(1,2);
    m.loadData([2,3]);
    m2 = new Matrix(2,1);
    m2.loadData([5,1]);

    res = m.mul(m2);
    verify(res,correct);
	


    m = new Matrix(1,2);
    m.loadData([3,2]);
    m2 = new Matrix(2,1);
    m2.loadData([5,1]);
    correct = [17];

    res = m.mul(m2);
    verify(res,correct);

    m = new Matrix(2,2);
    m2 = new Matrix(2,2);

    m.loadData([1,2,3,4]);
    m2.loadData([5,6,7,8]);
    correct = [23, 34, 31, 46];
    res = m.mul(m2);
    verify(res, correct);
   

    m = new Matrix(2,3);
    m2 = new Matrix(3,2);
    m.loadData([1,2,3,4,5,6]);
    m2.loadData([5,6,7,8,7,6]);
    res = m.mul(m2);
    correct = [58, 76, 59, 80];
    verify(res, correct);


    m = new Matrix(2,3);
    m2 = new Matrix(3,1);
    m.loadData([1,2,3,4,9,8]);
    m2.loadData([9,8,7]);
    res = m.mul(m2);
    correct = [96, 106];
    verify(res, correct);


    m = new Matrix(1,3);
    m.loadData([1,2,3]);

    m2 = new Matrix(3,3);
    m2.loadData([1,2,3,4,5,6,7,8,9]);
    res = m.mul(m2);
    correct = [14,32,50];
    verify(res, correct);

    console.log('Matrix Multiplication passed all tests!');
}



testMatrixMultiplication();
