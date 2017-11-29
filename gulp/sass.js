module.exports = function (gulp, plugins, config) {
    return function () {
		var destination = 'tmp/css';
				
		var stream = gulp.src('src/scss/**/*.scss')
		.pipe(plugins.sass({includePaths: ['src/scss']}))
		.pipe(plugins.autoprefixer({
				browsers: ['last 6 versions'],
				cascade: false
			}))
		.pipe(gulp.dest(destination));
		
		return stream;
	};
};