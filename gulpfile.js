'use strict';

global.$ = {
    path: {
      task: require('./gulp/paths/tasks.js')
    },
    gulp        : require('gulp'),
    concat      : require('gulp-concat'),
    uglify      : require('gulp-uglifyjs'),
    del         : require('del'),
    cleanCSS    : require('gulp-clean-css'),
    rename      : require('gulp-rename'),
    imagemin    : require('gulp-imagemin'),
    cache       : require('gulp-cache'),
    gp          : require('gulp-load-plugins')(),
    browserSync : require('browser-sync').create()
};


$.path.task.forEach(function (taskPath) {
    require(taskPath) ();
});


$.gulp.task('default', $.gulp.series(
   'clean',
    $.gulp.parallel(
        'imagemin',
        'sass',
        'pug',
        'common',
        'app-js'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));