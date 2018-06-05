var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade')

var path = {
  assets: {
    less: 'app/assets/less/**/*.less'
  },
  views: {
    jade: 'app/views/jade/**/*.jade'
  }
}

gulp.task('less', function () {
  return gulp.src(path.assets.less)
    .pipe(less())
    .pipe(gulp.dest('public/css'))
})

gulp.task('jade', function () {
  return gulp.src(path.views.jade)
    .pipe(jade())
    .pipe(gulp.dest('public'))
})

gulp.task('watch', function () {
  gulp.watch(path.views.jade, gulp.series('jade'))
  gulp.watch(path.assets.less, gulp.series('less'))
})

gulp.task('default', gulp.series('jade', 'less', 'watch'))
