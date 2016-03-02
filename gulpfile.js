var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src(['./app/**/*.js', '!./app/dist/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/dist/'));
});
