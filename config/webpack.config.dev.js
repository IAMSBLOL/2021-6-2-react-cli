// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const fs = require('fs')
process.env.NODE_ENV = process.env.ENV = 'development';

const baseConfigFn = require('./webpack.config.base');

const baseConfig = baseConfigFn('development')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  output: {
    path: paths.appBuild,
    // bundle
    filename: 'static/js/bundle.js',
    // 块
    chunkFilename: 'static/js/[name].chunk.js',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    // 热更新 关闭的话注意注释babel配置的热更新垫片
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],
};
const mergeDevConfig = merge(baseConfig, devConfig);

// 如果你怀疑自己的配置有问题，可以搞出来看看
// fs.writeFile('message.js', JSON.stringify(mergeDevConfig), { }, (err) => {
//   console.log(err)
// });
module.exports = mergeDevConfig
