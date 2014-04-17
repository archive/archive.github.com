var gulp = require('gulp');
var gutil = require('gulp-util');
var sassStyle = 'compressed';

gulp.task('default', ['csslint', 'sass'], function(){
});

var sass = require('gulp-ruby-sass');
gulp.task('sass', function (style, asd, assd) {
    gutil.log('style:' + sassStyle);
    gulp.src('./styles/app.scss')
        .pipe(sass({style: sassStyle}))
        .on('error', gutil.log)
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
    sassStyle = 'expanded';
    gulp.watch('./styles/**/*.scss', ['sass']);
});
