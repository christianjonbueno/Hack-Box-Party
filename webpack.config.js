const path = require('path');

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: 'bundle.js'
    },
    module: {  
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              }
        ]
    }
}