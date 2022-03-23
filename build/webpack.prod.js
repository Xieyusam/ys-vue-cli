// 生产环境
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const readEnv = require('./readEnv');
const env = readEnv('../.env.production');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');


module.exports = merge(base, {
	mode: 'production',
	// 入口文件 main.js
	entry: {
		main: './src/main.js'
	},
	devtool: false,
	plugins: [
		// 定义全局变量
		new webpack.DefinePlugin({
			process: {
				env: {
					...env
				}
			}
		}),
		new PreloadWebpackPlugin({
			rel: 'prefetch',
			include: 'asyncChunks'
		}),
	]
});
