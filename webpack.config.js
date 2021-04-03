const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'invoiceBundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin({ template: "./app/index.html" })],
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: { presets: [ '@babel/preset-env', '@babel/preset-react' ] }
				}
			}
		]
	}
};
