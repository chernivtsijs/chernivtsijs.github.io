const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const frontMatter = require('gulp-front-matter')
const remark = require('gulp-remark')
const html = require('remark-html')
const slug = require('remark-slug')
const breaks = require('remark-breaks')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const rollup = require('gulp-rollup')
const rollupYaml = require('rollup-plugin-yaml')
const rollupBabel = require('rollup-plugin-babel')
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
  const layout = file.headers.layout || 'layout/index.pug'
  const data = getData('./data.yml')
  const locals = Object.assign(data, {
    headers: file.headers,
    content: file.contents,
  })
  
  const html = pug.renderFile(layout, locals)
  const basename = path.basename(file.relative, path.extname(file.relative))
  const dirname = basename !== 'index' ? basename : ''

  file.contents = new Buffer(html)
  file.path = path.join(file.base, dirname, 'index.html')

  return callback(null, file)
})

gulp.task('pages', () => 
  gulp.src('pages/**/*.md')
    .pipe(plumber())
    .pipe(frontMatter({
      property: 'headers',
      remove: true,
    }))
    .pipe(remark().use(html).use(slug).use(breaks))
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
  gulp.src('scripts/**/*.js')
    .pipe(rollup({
      input: 'scripts/index.js',
      output: { format: 'cjs' },
      plugins: [
        rollupYaml(),
        rollupBabel()
      ],
      allowRealFiles: true,
    }))
    // .pipe(babel())
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

  gulp.watch(['layout/**/*.pug', 'pages/**/*.md', '*.yml'], gulp.series('pages'))
  gulp.watch('styles/**/*.styl', gulp.series('styles'))
  gulp.watch('scripts/**/*.js', gulp.series('scripts'))
  gulp.watch('images/**/*.*', gulp.series('images'))

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('build', 'watch'))
