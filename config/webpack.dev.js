/**
 * Created by watcher on 9/10/17.
 */
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
})
