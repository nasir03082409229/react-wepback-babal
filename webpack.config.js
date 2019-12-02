const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
					options: {
						
					}
				}
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};