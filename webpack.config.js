const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: "source-map", // Quita mensajes en consola relacionados con source map
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
    plugins: [ // Plugin para generar un html en el directorio de distribución a partir del index.html indicado
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      })
    ],

}