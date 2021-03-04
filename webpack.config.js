const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pc = {
  mode: 'production',
  entry: './src/pc/index.js',
  output: {
    path: path.resolve(__dirname, 'docroot/dist'),
    filename: 'index.js'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
}

const sp = {
  mode: 'production',
  entry: './src/sp/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'docroot_sp/dist'),
    filename: 'javascript/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
}

module.exports = [
  pc, sp
];
