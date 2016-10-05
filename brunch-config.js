exports.config = {
  hot: true,
  
  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },
  
  plugins: {
    babel: {
      presets: ['es2015', 'react']
    },
    sass: {
      modules: true
    },
    eslint: {
      pattern: /^app|initialize\/.*\.js?$/,
      warnOnly: true
    }
  }
}
