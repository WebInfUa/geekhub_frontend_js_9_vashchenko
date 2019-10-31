const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpSource = require('gulp-sourcemaps');

gulp.task('sass-watch', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulpSource.init()) //Показывает строку scss в консоли
    .pipe(gulpSass({outputStyle: 'compressed'}).on('Error', gulpSass.logError))
    /**
     * nested - вложенный, по умолчанию;
     * expanded - развернутый;
     * compact - компактный, когда селектор и его свойства в фигурных скобках выводятся в одну строку;
     * compressed - сжатый. Кроме того, благодаря обработке .on('error', sass.logError), если возникнет ошибка,
     * нам не придется перезагружать команду выполенния Gulpfile и мы будем видеть, в какой строке Sass файла у нас ошибка.
     * В примерах я буду использовать стиль вывода expanded для наглядности.
     **/
    .pipe(gulpSource.write('./')) //Показывает строку scss в консоле
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass-watch'))
});
