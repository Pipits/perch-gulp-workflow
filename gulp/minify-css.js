module.exports = function (gulp, plugins, config) {
    return function () {
        var destination = 'assets/css';

        var stream = gulp.src('tmp/css/**/*.css')
            .pipe(plugins.cssnano())
            .pipe(gulp.dest(destination));
        
        return stream;
	};
};