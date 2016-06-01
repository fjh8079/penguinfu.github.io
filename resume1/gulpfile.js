var gulp = require('gulp'); // 載入 gulp
var gulpSass = require('gulp-sass'); // 載入 gulp-sass
var sourcemaps = require('gulp-sourcemaps'); // css maps

// watch Scss
gulp.task('watchScss', function () {
    gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
    return gulp.src('assets/scss/**/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));     // 指定編譯後的 css 檔案目錄
});

gulp.task('default', ['watchScss']);