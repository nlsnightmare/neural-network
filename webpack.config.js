const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
	path: path.resolve(__dirname, 'lib'),
	filename: 'main.js',
	libraryTarget: 'umd',
	globalObject: 'this',
	library: 'NlsNet',
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