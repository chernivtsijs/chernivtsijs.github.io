const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const deploy = require('gulp-gh-pages');
const put = require('gulp-data');
const imagemin = require('gulp-imagemin');

const data = require('./data');

gulp.task('stylus', () =>
  gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css/'))
);

gulp.task('pug', () =>
  gulp.src('*.pug')
    .pipe(put(data))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('img', () =>
  gulp.src('./img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
);

gulp.task('copy', () => gulp.src('{CNAME,favicon*}').pipe(gulp.dest('dist')));

gulp.task('default', ['stylus', 'pug', 'img', 'copy']);

gulp.task('deploy', ['default'], () =>
  gulp.src('dist/**/*')
    .pipe(deploy({
      branch: 'master',
      push: true,
      message: `Update ${new Date()}`
    }))
);

gulp.task('watch-stylus', () =>
  gulp.watch('./stylus/*.styl', ['stylus'])
);

gulp.task('watch-pug', () =>
  gulp.watch('./*.pug', ['pug'])
);

gulp.task('watch', ['watch-stylus', 'watch-pug'])
