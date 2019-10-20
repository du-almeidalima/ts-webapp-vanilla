const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 344
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html',
        showErrors: true
      })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // For importing the html dynamically
            {
                test:/\.html$/,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath, context) => {
                        const relativePath = path.relative(context, resourcePath);
                        const hierarchy = relativePath.split('\\');
                        hierarchy.shift();
                        const componentPath = hierarchy.join('/');

                        return `components/${componentPath}`;
                    },
                    name: '[name].[ext]'
                },
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    }
};