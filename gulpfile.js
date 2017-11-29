
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: '*'});
var runSequence = require('run-sequence');
var del = plugins.del;
var browserSync = require('browser-sync').create();

function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins);
}


gulp.task('browserSync', function() {
  browserSync.init()
})

gulp.task('clean:tmp', function() {
  return del('tmp');
})

gulp.task('clean:dist', function() {
	return del('assets');
  })


gulp.task('sass', getTask('sass'));
gulp.task('scripts', getTask('scripts'));
gulp.task('minify-css', getTask('minify-css'));
gulp.task('minify-js', getTask('minify-js'));


gulp.task('watch', function (){
	// compile scss and prefix css if changed
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	
	// reload browser if template saved
	gulp.watch('perch/templates/**/*.html', browserSync.reload);
	gulp.watch('perch/templates/**/*.php', browserSync.reload);
	
	// if asset compiled and/or saved, reload browser
	gulp.watch('tmp/**/*.*', browserSync.reload);
});


// DEVELOPMENT
gulp.task('default', function (callback) {
  runSequence('clean:tmp',
		['browserSync', 'sass', 'scripts'], 'watch', 
		callback)
});

// PRODUCTION
gulp.task('build', function (callback) {
	runSequence('clean:dist',
		['sass', 'scripts'], 
		['minify-css', 'minify-js'], 
		 callback)
  });


