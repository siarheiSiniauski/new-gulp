'use strict';

module.exports = function() {
    $.gulp.task('common', function() {
        return $.gulp.src(['./source/js/common.js'])
        .on('error', $.gp.notify.onError(function (error) {
            return {
                title: 'Common',
                message: error.message
            }
        }))
        .pipe($.concat('common.min.js'))
        .pipe($.uglify())
        .pipe($.gulp.dest('./source/js'));
    });
};