const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
	path: path.resolve(__dirname, 'lib'),
	filename: 'neuralnetwork.js',
	libraryTarget: 'umd',
	globalObject: 'this',
	library: 'NeuralNetwork',
    },
    module: {
	rules: [
	    {
		test: /\.(js)$/,
		exclude: /(node_modules|bower_components)/,
		use: 'babel-loader'
	    }
	]
    },
};
