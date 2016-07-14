var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    gulp.src('app/less/*')
        .pipe(less())
        .pipe(gulp.dest('app/css/'));
});
