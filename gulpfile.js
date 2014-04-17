var gulp = require('gulp');

gulp.task('default', ['csslint', 'sass'], function(){
});

var sass = require('gulp-ruby-sass');
gulp.task('sass', function () {
    gulp.src('./styles/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles/output'));
});

var csslint = require('gulp-csslint');
gulp.task('csslint', function() {
    gulp.src('./styles/app-imports.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles/output'))
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter());
});

gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});
