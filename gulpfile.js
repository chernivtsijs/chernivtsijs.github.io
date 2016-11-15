const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      pug = require('gulp-pug')


gulp.task('stylus', () => {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('pug', () => {
  return gulp.src('./*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('img', () => {
  return gulp.src('./img/*.*')
    .pipe(gulp.dest('./dist/img/'))
})

gulp.task('default', ['stylus', 'pug', 'img'])

gulp.task('watch-stylus', () => {
  return gulp.watch('./stylus/*.styl', ['stylus'])
})

gulp.task('watch-pug', () => {
  return gulp.watch('./*.pug', ['pug'])
})

gulp.task('watch', ['watch-stylus', 'watch-pug'])
