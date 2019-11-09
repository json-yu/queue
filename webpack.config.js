const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: 'http://localhost:8080/build',
    port: 8080,
    proxy: {
        '/': {
          target: 'http://localhost:3000/',
          secure: false,
        }
      },
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex that checks if a file ever ends with .js/.jsx so it knows whether or not to use the babel-loader
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }       
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // order matters
          // may need options for url
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
//     }),
//   ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
