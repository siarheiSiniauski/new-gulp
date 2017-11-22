'use strict';

module.exports = function() {
    $.gulp.task('watch', function () {
        $.gulp.watch('./source/style/*.sass', $.gulp.series('sass'));
        $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    });
};
