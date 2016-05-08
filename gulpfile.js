var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['app.js', './scripts/**/*.js', './scripts/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./')).pipe(wiredep({   //Once custom js files are injected, inject bower js files as well
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./'));
});
