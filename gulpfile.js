var gulp = require('gulp')

gulp.task('sw', function (callback) {
  var path = require('path')
  var swPrecache = require('sw-precache')

  swPrecache.write(`public/service-worker.js`, {
    staticFileGlobs: ['public/bundle.js', 'public/index.html', 'public/style.css'],
    stripPrefix: 'public'
  }, callback)
})

gulp.task('default', ['sw'])
// staticFileGlobs: ['public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}']
