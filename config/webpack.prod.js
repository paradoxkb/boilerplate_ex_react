/**
 * Created by watcher on 9/10/17.
 */
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin()
	]
})
