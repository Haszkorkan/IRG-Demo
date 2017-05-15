// Gather used gulp plugins
var gulp = require('gulp');
    rename = require('gulp-rename');
    watch = require('gulp-watch');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    livereload = require('gulp-livereload');
    mustache = require('gulp-mustache');


// Set paths
var paths = {
  sass: {
    input: 'src/sass/app.sass',
    allfiles: 'src/sass/**/*.+(scss|sass)',
    output: 'dist/css'
  },
  mustache: {
    input: './src/*.html',
    allfiles: './src/**/*.{html,mustache}',
    output: './dist'
  }
};

// Define SASS compiling task
gulp.task('sass', function () {
  gulp.src(paths.sass.input)
    .pipe(sass(
      {outputStyle: 'compressed'}
    ).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.sass.output))
    .pipe(livereload());
});

// Define Mustache compiling task
gulp.task('mustache', function() {
  return gulp.src(paths.mustache.input)
    .pipe(mustache())
    .pipe(gulp.dest(paths.mustache.output));
});


// Listen folders for changes and apply defined tasks
gulp.task('default', [
    'sass',
    'mustache'
  ], function() {
  livereload.listen();
  gulp.watch([paths.sass.allfiles, paths.mustache.allfiles], [
    'sass',
    'mustache'
  ]);
});
