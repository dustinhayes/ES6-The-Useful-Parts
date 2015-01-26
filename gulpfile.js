var gulp = require('gulp');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('./src/**/*.js')
        .pipe(concat('index.js'))
        .pipe(to5())
        // .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.watch('src/**/*.js', ['default']);
