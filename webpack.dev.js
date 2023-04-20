const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
module.exports = merge.merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // progress: true,
        liveReload: true,
        static: {
            directory: path.join(__dirname,"/")
        }
    },
});