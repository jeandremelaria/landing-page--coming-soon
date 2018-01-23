//---- CONSTRANTS ----//
const gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');

//---- LOG MESSAGE ----//
gulp.task('message', function() {
    return console.log('Gulp is running...');
});

//---- GULP PREFIXER AND CSS NANO ----//
gulp.task('prefixerAndCssNano', function() {
    return gulp.src('src/css/*.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'));
});


//---- COPY ALL HTML FILES TO BUILD FOLDER AND MINIFY ----//
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
});

//---- MINIFY IMAGES ----//
gulp.task('img', () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
);

//---- RUN MULTIPLE TASKS AT ONCE IN ARRAY ----//
gulp.task('default', ['message', 'prefixerAndCssNano', 'img', 'copyHtml']);

//---- GULP WATCH ----//
gulp.task('watch', ['browserSync'], function() {
    gulp.watch('src/css/*.css', ['prefixerAndCssNano']);
    gulp.watch('src/*.html', ['copyHtml']);

    // reload browser when the files change
    gulp.watch('build/css/*.css', browserSync.reload);
    gulp.watch('build/*.html', browserSync.reload);
});