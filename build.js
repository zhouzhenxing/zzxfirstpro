var webpack=require('webpack');
var webpackconfig=require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var proxyPath=null;
var path  = require('path');
var listenPort=8080;
var rootPath   =  path.resolve(__dirname, './build/');
var devConfig = Object.create(webpackconfig);

devConfig.plugins.push(
    	new webpack.HotModuleReplacementPlugin()
	);
devConfig.devtool           = 'eval';
devConfig.debug             = true;
devConfig.output.publicPath = '/build/';
devConfig.Port              = listenPort;
var compiler = webpack(devConfig);

var serverConfig = {
		contentBase       : rootPath,
		publicPath        : devConfig.output.publicPath,
		hot               : true,
		historyApiFallback: true,
		stats             : { colors  : true }
	}
var server = new WebpackDevServer(compiler,serverConfig);
server.listen(8080,'localhost', function(err) {
	
});
