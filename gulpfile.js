const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
let sassStyle = 'compressed';
const csslint = require('gulp-csslint');
const eslint = require('gulp-eslint');

gulp.task('default', ['csslint', 'sass', 'eslint']);

gulp.task('sass', () => {
  gutil.log('style:' + sassStyle);
  return gulp.src('./styles/app.scss')
    .pipe(sass({outputStyle: sassStyle})
      .on('error', sass.logError))
    .pipe(gulp.dest('./output'));
});

gulp.task('csslint', () => {
  return gulp.src('./styles/app-imports.scss')
    .pipe(sass())
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.formatter());
});

gulp.task('eslint', function () {
    return gulp.src('./scripts/app/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  sassStyle = 'expanded';
  gulp.watch('./styles/**/*.scss', ['sass']);
});
