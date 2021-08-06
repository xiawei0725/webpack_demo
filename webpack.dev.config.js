const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devServer: {
		port: 9527,
		open: true,
		contentBase: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'hello webpack'
		})
	]
}