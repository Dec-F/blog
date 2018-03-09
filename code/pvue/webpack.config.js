var path=require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports={
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'./dist')
    },
    plugins: [
        new BundleAnalyzerPlugin()
      ]
}