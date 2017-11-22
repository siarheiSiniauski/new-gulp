'use strict';

module.exports = function() {
    $.gulp.task('watch', function () {
        $.gulp.watch('./source/style/*.sass', $.gulp.series('sass'));
        $.gulp.watch('./source/template/pages/*.pug', $.gulp.series('pug'));
    });
};