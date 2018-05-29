/**
 * Created by watcher on 9/10/17.
 */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				"presets": ["react", "es2015", "stage-2"]
			}
		}, {
			test: /\.json?$/,
			loader: 'json-loader'
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}, // Font and images
			{ test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: "file-loader?name=./assets/images/[name].[ext]" },
			{ test: /\.(ttf|eot)$/, loader: "file-loader" }
		]
	},
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
