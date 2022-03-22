// 生产环境
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const readEnv = require('./readEnv');
const env = readEnv('../.env.production');

module.exports = merge(base, {
	mode: 'production',
	devtool: false,
	plugins: [
		// 定义全局变量
		new webpack.DefinePlugin({
			process: {
				env: {
					...env
				}
			}
		})
	]
});
