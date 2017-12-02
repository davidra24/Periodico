module.exports = {
    entry  : './src/index.jsx',
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
    
}