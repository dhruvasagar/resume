const { src, dest, watch, parallel } = require('gulp');
const pug = require('gulp-pug')
const less = require('gulp-less')

var paths = {
  assets: {
    less: 'src/assets/less/**/*.less'
  },
  views: {
    pug: 'src/views/pug/**/*.pug'
  }
}

function build_less() {
  return src(paths.assets.less)
    .pipe(less())
    .pipe(dest('public/css'))
}

function build_pug() {
  return src(paths.views.pug)
    .pipe(pug())
    .pipe(dest('public'))
}

function run_watch() {
  watch([paths.views.pug], build_pug)
  watch([paths.assets.less], build_less)
}

module.exports = {
  pug: build_pug,
  less: build_less,
  watch: run_watch,
  default: parallel(build_less, build_pug)
}
