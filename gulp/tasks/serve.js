'use strict';

module.exports = function() {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            // open: false,
            notify: false,
            server: './build'
        });
        $.browserSync.watch('build', $.browserSync.reload);
    });
};