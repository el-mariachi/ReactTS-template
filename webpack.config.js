const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/views/index.html'
    })]
}
