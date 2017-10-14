var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/mainIndex.js',
    settings: './src/settingsIndex.js',
  },
  
  output: {
    path: `${__dirname}/renderer/js`,
    filename: '[name].index.js',
  },

  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
          query:
          {
            presets:['es2015', 'react']
          }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
    ],
  },
};
