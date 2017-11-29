module.exports = function (gulp, plugins, config) {
    return function () {
		var destination = 'tmp/js';
		
        var stream = gulp.src('src/js/**/*.js')
            .pipe(plugins.newer(destination))
			.pipe(gulp.dest(destination));
			
		return stream;
    };
};