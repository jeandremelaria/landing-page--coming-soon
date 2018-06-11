//---- CONSTANTS ----//
const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    htmlmin = require('gulp-htmlmin');

//---- LOG MESSAGE ----//
gulp.task('message', function() {
    return console.log('Gulp is running...');
});

//---- MINIFY IMAGES ----//
gulp.task('img', () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
);

//---- GULP PREFIXER AND CSS NANO ----//
gulp.task('prefixerAndCssNano', function() {
    return gulp.src('src/css/*.css')
        .pipe(postcss([autoprefixer('last 2 versions')]))
        .pipe(cssnano())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'));
});

//---- MINIFY JS ----//
gulp.task('minifyJs', function(cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            concat('main.js'),
            gulp.dest('build/js')
        ],
        cb
    );
});

//---- COPY ALL HTML FILES TO BUILD FOLDER AND MINIFY ----//
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));

    gulp.src('src/includes/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/includes'));
});

//---- RUN MULTIPLE TASKS AT ONCE IN ARRAY ----//
gulp.task('default', ['message', 'img', 'prefixerAndCssNano', 'minifyJs', 'copyHtml']);

//---- GULP WATCH ----//
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['minifyJs']);
    gulp.watch('src/css/*.css', ['prefixerAndCssNano']);
    gulp.watch('src/includes/*.html', ['copyHtml']);
    gulp.watch('src/*.html', ['copyHtml']);

});