
var MODULE_NAME = 'DistilledAssessment';
var paths = {
    app: 'public_html/',
    indexFile: 'public_html/index.html',
    mainCss: 'public_html/assets/css/index.css',
    sassCss: 'public_html/assets/sass/index.scss',
    cssDir: 'public_html/assets/css',
    dist: 'dist/',
    outputCss: 'index.css',
    outputJs: 'index.js'
};



var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('default', ['browserSync']);

gulp.task('sass', function () {
    gulp.src(paths.sassCss)
            .pipe(sourcemaps.init())
            .pipe(sass())
//            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.cssDir))
            .pipe(browserSync.reload({
                stream: true
            }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch(paths.sassCss, ['sass']);
    gulp.watch([paths.indexFile, 
        paths.app + "**/" + "*.css", 
        paths.app + "**/" +  "*.js", 
        paths.app + "**/" + "*.html"],
            browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync({
        port: 8000,
        server: {
            baseDir: paths.app
        }
    });
});