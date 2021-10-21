const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
              test: /\.(scss)$/,
              use: [
                  'style-loader','css-loader',
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                              // Options
                            },
                          ],
                        ],
                      },
                    },
                  },'sass-loader'
              ]
            }
          ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      })
    ],

}