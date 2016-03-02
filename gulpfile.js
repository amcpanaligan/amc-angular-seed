var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./app/**/*.js', '!./app/dist/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/dist/'));
});
