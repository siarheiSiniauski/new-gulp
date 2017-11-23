'use strict';

module.exports = function() {
    $.gulp.task('watch', function () {
        $.gulp.watch('./source/style/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./source/img/**/*', $.gulp.series('imagemin'));
        $.gulp.watch(['./source/libs/**/*.js', './source/js/common.js'], $.gulp.series('common'));
    });
};
