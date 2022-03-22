const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// npm install --save-dev preload-webpack-plugin@next
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
	// 入口文件 main.js
	entry: {
		main: './src/main.js'
	},
	resolve: {
		// 路径别名
		alias: {
			'@': path.resolve('./src')
		},
		// 引入文件时省略后缀
		extensions: ['.js', '.ts', '.less', '.vue']
		// modules: [path.resolve(__dirname, "../node_modules")]
	},
	optimization: {
		splitChunks: {
			chunks: 'all' // 所有的 chunks 代码公共的部分分离出来成为⼀个单独的⽂件
		},
		concatenateModules: true
	},
	// 输出
	output: {
		// 输出到 dist文件夹
		path: path.resolve(__dirname, '../dist'),
		// js文件下
		filename: 'js/[name]-[contenthash].js',
		chunkFilename: 'js/[name]-[contenthash].js', // 设置按需加载后的chunk名字
		// 每次打包前自动清除旧的dist
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				// 匹配js后缀文件
				test: /\.js$/,
				// 排除node_modules中的js
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				// 匹配文件后缀的规则
				test: /\.(css|s[cs]ss)$/,
				use: [
					// loader执行顺序是从右到左
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
					// {
					//   loader: 'sass-resources-loader',
					//   options: {
					//     resources: [
					//       // 放置全局引入的公共scss文件
					//     ],
					//   },
					// },
				]
			},
			{
				// 匹配文件后缀的规则
				test: /\.(png|jpe?g|gif|svg|webp)$/,
				type: 'asset',
				parser: {
					// 转base64的条件
					dataUrlCondition: {
						maxSize: 25 * 1024 // 25kb
					}
				},
				generator: {
					// 打包到 dist/image 文件下
					filename: 'images/[contenthash][ext][query]'
				}
			}
		]
	},
	// 插件都放 plugins 中
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			// 将css代码输出到dist/styles文件夹下
			filename: 'styles/[name]-[contenthash].css',
			ignoreOrder: true
		}),
		// new PreloadWebpackPlugin({
		// 	rel: 'prefetch',
		// 	include: 'asyncChunks'
		//   }),
		new HtmlWebpackPlugin({
			// 选择模板 public/index.html
			template: './public/index.html',
			// 打包后的名字
			filename: 'index.html',
			// js文件插入 body里
			inject: 'body'
		}),

		new ProgressBarPlugin({
			format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
		})
	]
};
