const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/test.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname + "/build")
	},
	mode: "none",
	module:
	{
		rules: [{
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {minimize: true}
			}]
		}]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/test.html',
			filename: 'index.html'
		})
	]
};