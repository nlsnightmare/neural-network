import Matrix from '../src/matrix.js';

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


    m = new Matrix(1,3);
    m.loadData([1,2,3]);
    res = m.transpose();
    correct = [1,2,3];
    verify(res, correct);

    console.log('Matrix Multiplication passed all tests!');
}

testMatrixMultiplication();
