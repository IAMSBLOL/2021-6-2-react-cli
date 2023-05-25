const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const safePostCssParser = require('postcss-safe-parser');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('./paths');
const { merge } = require('webpack-merge');
const baseConfigFn = require('./webpack.config.base');
// const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const baseConfig = baseConfigFn('production')
// const isEnvProduction = process.env.NODE_ENV === 'production'
const isEnvProductionProfile = process.argv.includes('--profile');

const proConfig = {
  mode: 'production',
  // devtool: shouldUseSourceMap ? 'source-map' : false,
  devtool: false,
  output: {
    path: paths.appBuild,
    // bundle
    filename: 'static/js/[name].[contenthash:8].js',
    // 块
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  optimization: {
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            // 传递2015或更大以启用compress将 ES5 代码转换为更小的 ES6+ 等效形式的选项。
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,

          },
          mangle: {
            // true绕过 Safari 10 循环迭代器错误 “无法两次声明 let 变量”。
            safari10: true,
          },

          // keep_classnames(默认: false) -- 通过true以防止压缩器丢弃类名。传递正则表达式以仅保留与该正则表达式匹配的类名
          keep_classnames: isEnvProductionProfile,
          // keep_fargs(default: true) -- 防止压缩器丢弃未使用的函数参数。对于依赖于Function.length.
          keep_fnames: isEnvProductionProfile,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
      }),
      // This is only used in production mode
      new CssMinimizerPlugin(),
    ],

    splitChunks: {
      chunks: 'all',
      name: false,
    },
    // Keep the runtime chunk separated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    // https://github.com/facebook/create-react-app/issues/5358
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },

  plugins: [
    isEnvProductionProfile && new BundleAnalyzerPlugin(),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      // 干掉CSS的排序警告
      ignoreOrder: true
    }),

  ].filter(Boolean)

};

const mergeDevConfig = merge(proConfig, baseConfig);
module.exports = mergeDevConfig
