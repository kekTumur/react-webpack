const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(s[ca]ss)$/,
                exclude: /node_modules/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            

            // Loading fonts
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [ 
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [ 
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Webpack',
            buildTime: new Date().toISOString()
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
};