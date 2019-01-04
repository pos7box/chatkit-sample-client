const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
    resolve: {
        alias: {
            deepmerge$: path.resolve(__dirname, 'node_modules/deepmerge/dist/umd.js'),
        },
    }
    
}