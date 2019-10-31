const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpSource = require('gulp-sourcemaps');
const gulpWatch = require('gulp-watch');

gulp.task('sass-compile', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(gulpSource.init())
    .pipe(gulpSass().on('ERROR', sass.logError))
    .pipe(gulpSource.write('./'))
    .pipe(gulp.dest('./css'))
});
