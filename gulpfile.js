const fs = require('fs')
const gulp = require('gulp')
const frontMatter = require('gulp-front-matter')
const remark = require('gulp-remark')
const html = require('remark-html')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const pug = require('pug')
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')
const yaml = require('js-yaml')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const through = require('through2')
const del = require('del')
const BS = require('browser-sync')

// TODO: Add paths object here

const browserSync = BS.create()

const getData = (path) => {
  try {
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'))
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

const applyTemplate = () => through.obj((file, enc, callback) => {
  const layout = file.frontMatter.layout || 'layout/index.pug'
  const data = Object.assign(getData('./data.yml'), file.frontMatter)

  const html = pug.renderFile(layout, data)

  file.contents = new Buffer(html)
  file.extname = '.html'

  return callback(null, file)
})

gulp.task('pages', () => 
  gulp.src('pages/**/*.md')
    .pipe(plumber())
    .pipe(frontMatter())
    .pipe(remark().use(html))
    .pipe(applyTemplate())
    .pipe(gulp.dest('dist'))
)

gulp.task('styles', () => {
  const processors = [
    autoprefixer,
    cssnano,
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
  gulp.src(['static/**/*', 'CNAME'])
    .pipe(gulp.dest('dist'))
)

gulp.task('clean', () => del('dist'))

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'pages',
    'styles',
    'scripts',
    'images',
    'copy'
  )
))

gulp.task('watch', () => {
  browserSync.init({
    server: 'dist',
  })

  gulp.watch(['layout/**/*.pug', '*.yml'], gulp.series('pages'))
  gulp.watch('styles/**/*.styl', gulp.series('styles'))
  gulp.watch('scripts/**/*.js', gulp.series('scripts'))
  gulp.watch('images/**/*.*', gulp.series('images'))

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('build', 'watch'))
