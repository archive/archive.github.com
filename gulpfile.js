var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sassStyle = 'compressed';
var csslint = require('gulp-csslint');

gulp.task('default', ['sass']);

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
        .pipe(gulp.dest('./styles/output'))
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter());
});

gulp.task('watch', () => {
    sassStyle = 'expanded';
    gulp.watch('./styles/**/*.scss', ['sass']);
});
