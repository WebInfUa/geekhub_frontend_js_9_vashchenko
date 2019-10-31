const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpSource = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-watch', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulpSource.init()) //Показывает строку scss в консоли
    .pipe(gulpSass().on('Error', gulpSass.logError))
    .pipe(gulpSource.write('./')) //Показывает строку scss в консоле
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass-watch'))
});
