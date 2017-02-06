var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-loader');
var path = require("path");
var buildPath=path.resolve(__dirname, './build/static');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry:{
        app:[
           'webpack/hot/dev-server',
           'webpack-dev-server/client?http://localhost:8080',
           './app/dev/app.js'
         ]
     },
    output: {
        path:buildPath,
        filename: '[name].js'
    },
    module: {
        loaders: [{
          test: /\.vue$/,
          loader: 'vue'
        },{
             test: /\.js$/,
             exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
             loader: 'babel'
         },{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.ejs$/,
            loader: 'ejs'
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style','css!autoprefixer!less')
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
        },{
            test: /\.html$/,
            loader: 'html'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/dev/page.html',
      chunks:['app'],
      inject: 'body',
      hash:true
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.coffee', '.js','.css','.scss','.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    sassLoader: {
        // 用于sass import时的路径查找，默认会在 ../common/style 目录下查找
        includePaths: [ path.resolve(__dirname, './app/dev/common/style') ],
    },
    vue:{
      loaders:{
        css:ExtractTextPlugin.extract('style', 'css!autoprefixer'),
        sass:ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
        scss:ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
      }
    }
}