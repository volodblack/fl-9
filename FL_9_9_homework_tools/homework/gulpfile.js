'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');
const connect = require('gulp-connect');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const jshint = require('gulp-jshint');

/***********************build:prod********************/
gulp.task('concat-uglify-js-prod', function() {
    gulp.src(['src/js/canvasState.js', 'src/js/clock.js', 'src/js/app.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('compile-concat-minify-prod', function() {
    gulp.src('src/sass/*.scss') 
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('create-html', function() {
    gulp.src('src/app.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('delete-dist', function() {
    del.sync(['dist/**/*.min.*', 'dist/index.html', 'dist'])
});

gulp.task('build-prod', function() {
    runSequence('delete-dist', 'create-html', 'concat-uglify-js-prod', 'compile-concat-minify-prod')
});

/**********************start*************************/
gulp.task('connect', function() {
  connect.server({
    root: 'new',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./new/*.html')
    .pipe(gulp.dest('./new'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./new/*.html'], ['html']);
});

gulp.task('default', ['build', 'connect', 'watch']);

/********************build*************************/
gulp.task('concat-js-build', function() {
    gulp.src(['src/js/canvasState.js', 'src/js/clock.js', 'src/js/app.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./new/js'));
});

gulp.task('copy-html', function() {
    gulp.src('src/app.html')
        .pipe(gulp.dest('./new'));
});

gulp.task('copy-moment', function() {
    gulp.src('node_modules/moment/min/moment.min.js')
        .pipe(gulp.dest('./new/js'));
});

gulp.task('compile-concat-build', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./new/css'));
});

gulp.task('delete-b', function() {
    del.sync(['new/**/*.min.*','new/index.html', 'new/css'])
});

gulp.task('jshint', () => {
    gulp.src('new/*.html')
        .pipe(jshint.extract())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('build', function() {
    runSequence('delete-b', 'copy-html', 'copy-moment', 'compile-concat-build', 'concat-js-build')
});