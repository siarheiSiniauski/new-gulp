'use strict';

module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('./source/style/**/*.sass')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({outputStyle: 'expand'}).on('error', $.gp.notify.onError(function(error){
                return {
                    title: 'Style',
                    message: error.message
                };
        })))
        .pipe($.rename({suffix: '.min', prefix : ''}))
        .pipe($.gp.autoprefixer({
            browsers: [
                'last 3 version',
                '> 1%',
                'ie 8',
                'ie 9',
                'Opera 12.1'
            ]
        }))
        .pipe($.cleanCSS()) // Опционально, закомментировать при отладке
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('./build/assets/css'));
    });
};