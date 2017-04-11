const fs = require('fs')

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const pug = require('gulp-pug')
const put = require('gulp-data')
const imagemin = require('gulp-imagemin')
const deploy = require('gulp-gh-pages')
const sourcemaps = require('gulp-sourcemaps')

const yaml = require('js-yaml')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const del = require('del')
const BS = require('browser-sync')

const browserSync = BS.create()

const getData = (path) => {
  try {
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'))
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

gulp.task('layout', () =>
  gulp.src('layout/[!_]*.pug')
    .pipe(plumber())
    .pipe(put(() => getData('./data.yml')))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
)

gulp.task('styles', () => {
  const processors = [
    autoprefixer,
    // cssnano,
  ]

  return gulp.src('styles/[!_]*.styl')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
})

gulp.task('scripts', () =>
  gulp.src('scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/scripts'))
)

gulp.task('images', () =>
  gulp.src('images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
)

gulp.task('copy', () =>
  gulp.src([
    'CNAME', 'favicon*', './mail/*.*', 'join/*.*'], { base: '.' })
    .pipe(gulp.dest('dist'))
)

gulp.task('clean', () => del('dist'))

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'layout',
    'styles',
    'scripts',
    'images',
    'copy'
  )
))

gulp.task('deploy', gulp.series('build', () =>
  gulp.src('dist/**/*')
    .pipe(deploy({
      branch: 'master',
      push: true,
      message: `Update ${new Date()}`
    }))
))

gulp.task('watch', () => {
  browserSync.init({
    server: 'dist',
  })

  gulp.watch(['layout/**/*.pug', '*.json'], gulp.series('layout'))
  gulp.watch('styles/**/*.styl', gulp.series('styles'))
  gulp.watch('scripts/**/*.js', gulp.series('scripts'))
  gulp.watch('images/**/*.*', gulp.series('images'))

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('build', 'watch'))
