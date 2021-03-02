const pc = {
  mode: 'production',
  entry: './src/pc/index.js',
  output: {
    path: __dirname + '/docroot/dist',
    filename: 'index.js'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
}

const sp = {
  mode: 'production',
  entry: './src/sp/index.js',
  output: {
    path: __dirname + '/docroot_sp/dist',
    filename: 'index.js'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
}

module.exports = [
  pc, sp
];
