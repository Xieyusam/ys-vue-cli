const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const readEnv = require('./readEnv');
const env = readEnv('../.env.development');
const path = require('path')

module.exports = merge(base, {
	mode: 'development',
	entry: {
		main: './src/main.js'
	},
	cache: {
		type: 'filesystem',
	},
	devServer: {
		static: path.resolve(__dirname, '../dist'),
		// 自定义端口号
		port: 7000,
		// 自动打开浏览器
		open: true,
		hot: true
	},
	target:'web',
	devtool: 'eval-cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			process: {
				env: {
					...env
				}
			}
		}),
	]
});
