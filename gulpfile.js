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

/* Start 2017 */

gulp.task('layout_2017', () =>
  gulp.src('2017/layout/[!_]*.pug')
    .pipe(plumber())
    .pipe(put(() => getData('./2017/data.yml')))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist/2017'))
)

gulp.task('styles_2017', () => {
  const processors = [
    autoprefixer,
    cssnano,
  ]

  return gulp.src('2017/styles/[!_]*.styl')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/2017/styles/'))
})

gulp.task('scripts_2017', () =>
  gulp.src('2017/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/2017/scripts'))
)

gulp.task('images_2017', () =>
  gulp.src('2017/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/2017/images'))
)

/* End 2017 */

/* Start 2018 */

gulp.task('layout_main', () =>
  gulp.src('main/layout/[!_]*.pug')
    .pipe(plumber())
    .pipe(put(() => getData('./main/data.yml')))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
)

gulp.task('styles_main', () => {
  const processors = [
    autoprefixer,
    cssnano,
  ]

  return gulp.src('main/styles/[!_]*.styl')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles/'))
})

gulp.task('scripts_main', () =>
  gulp.src('main/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/scripts'))
)

gulp.task('images_main', () =>
  gulp.src('main/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
)

/* End 2018 */

gulp.task('copy', () =>
  gulp.src([
    'CNAME', 'favicon*', 'images/mail/*.*', './mail/*/*/*.*', './mail/*/*/*/*/*.*', './mail/*/*/*/*.*', 'join/*.*'], { base: '.' })
    .pipe(gulp.dest('dist'))
)

gulp.task('clean', () => del('dist'))

gulp.task('build_2017', gulp.series(
	'clean',
	gulp.parallel(
		'layout_2017',
		'styles_2017',
		'scripts_2017',
		'images_2017'
	)
))

gulp.task('build_main', gulp.series(
	'clean',
	gulp.parallel(
		'layout_main',
		'styles_main',
		'scripts_main',
		'images_main'
	)
))

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'build_2017',
    'build_main',
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

	/* Start 2017 */
	gulp.watch(['2017/layout/**/*.pug', '2017/*.yml'], gulp.series('layout_2017'))
	gulp.watch('2017/styles/**/*.styl', gulp.series('styles_2017'))
	gulp.watch('2017/scripts/**/*.js', gulp.series('scripts_2017'))
	gulp.watch('2017/images/**/*.*', gulp.series('images_2017'))
	/* End 2017 */

	/* Start 2018 */
  gulp.watch(['main/layout/**/*.pug', 'main/*.yml'], gulp.series('layout_main'))
  gulp.watch('main/styles/**/*.styl', gulp.series('styles_main'))
  gulp.watch('main/scripts/**/*.js', gulp.series('scripts_main'))
  gulp.watch('main/images/**/*.*', gulp.series('images_main'))
	/* End 2018 */

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('build', 'watch'))
