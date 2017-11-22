'use strict';

module.exports = function() {
    $.gulp.task('app-js', function() {
        return $.gulp.src([
            './source/libs/jquery/dist/jquery.min.js',   
            './source/js/common.min.js' // Всегда в конце
            ])
        .pipe($.concat('app.min.js'))
        .pipe($.uglify()) // Минимизировать весь js (на выбор)
        .pipe($.gulp.dest('./build/assets/js'));
    });
};