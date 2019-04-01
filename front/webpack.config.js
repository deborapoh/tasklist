const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const prodMode = process.env.NODE_ENV === 'production';

const configs = prodMode
  ? require(`/${__dirname}/src/config/configProd`)
  : require(`/${__dirname}/src/config/configDev`);

const config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  // devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    sideEffects: false,
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2', 'es2015'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          prodMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['build']),
    new DashboardPlugin(),
    new CompressionPlugin({
      test: /\.js/,
      algorithm: 'gzip',
    }),
    new WebpackPwaManifest({
      name: configs.TITLE,
      short_name: configs.SHORT_NAME,
      filename: 'manifest.json',
      description: configs.DESCRIPTION,
      background_color: '#ffffff',
      icons: [
        {
          src: `/${__dirname}/src/assets/${configs.LOGO}`,
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: `/${__dirname}/src/assets/${configs.LOGO}`,
          size: '1024x1024', // you can also use the specifications pattern
        },
      ],
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: configs.CACHE_ID,
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [
        /\.map$/,
        /asset-manifest\.json$/,
      ],
    }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
      filename: 'index.html',
      title: configs.TITLE,
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
      meta: {
        'og:image': `${__dirname}/src/assets/${configs.LOGO}`,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    open: true,
    hot: true,
    clientLogLevel: 'warning',
    stats: {
      colors: true,
    },
    overlay: true,
    historyApiFallback: true,
    headers: {
      'X-Custom-Header': 'yes',
      'X-Powered-By': 'Fq',
    },
  },
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new OptimizeCSSAssets(), // call the css optimizer (minification)
  );
}
