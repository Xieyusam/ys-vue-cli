const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const readEnv = require('./readEnv');
const env = readEnv('../.env.development');

module.exports = merge(base, {
	mode: 'development',
	devServer: {
		// 自定义端口号
		port: 7000,
		// 自动打开浏览器
		open: true
		// hot: true,
	},
	devtool: 'eval-cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			process: {
				env: {
					...env
				}
			}
		})
	]
});
