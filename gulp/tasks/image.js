'use strict';

module.exports = function() {
    $.gulp.task('imagemin', function() {
		return $.gulp.src('./source/img/**/*')
		.pipe($.cache($.imagemin()))
		.pipe($.gulp.dest('./build/assets/img')); 
	});
};

