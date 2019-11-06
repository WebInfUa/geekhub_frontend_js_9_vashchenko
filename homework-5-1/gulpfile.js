const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpSource = require('gulp-sourcemaps');

gulp.task('sass-watch', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulpSource.init())
    .pipe(gulpSass({outputStyle: 'compact'}).on('Error', gulpSass.logError))
    .pipe(gulpSource.write('./'))
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass-watch'))
});
