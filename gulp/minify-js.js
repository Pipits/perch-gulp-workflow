module.exports = function (gulp, plugins, config) {
    return function () {
		var destination = 'assets/js';
		
        var stream = gulp.src('tmp/js/**/*.js')
            .pipe(plugins.uglify())
            .pipe(gulp.dest(destination));
            	
		return stream;
    };
};