var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('sender/')
  .pipe(webserver({
    livereload: true,
    directoryListing: false,
    open: true
  }));
});

var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('stream', function () {
	// Endless stream mode
    return watch('sender/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
    return watch('sender/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
	// Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('sender/*.css', function () {
        gulp.src('sender/*.css')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('default', ['webserver']);
