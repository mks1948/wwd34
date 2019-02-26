'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/style.scss')
  // .pipe(sourcemaps.init())
  .pipe(sass.sync().on('error', sass.logError))
 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css/'))
    .pipe(livereload());
  });
  
  gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch("src/*.html").on('change', livereload.reload);
    gulp.watch("src/sass/**/*.scss",gulp.parallel('sass'));
   

    // gulp.watch("app/sass/*.scss").on('change', livereload.reload);
    
    gulp.watch("src/css/*.css").on('change', livereload.reload);

  console.log('jestemtutaj')
});

gulp.task('default', gulp.parallel('sass:watch' ));

