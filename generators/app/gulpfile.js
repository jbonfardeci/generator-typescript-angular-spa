var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');
var sass = require('gulp-sass');

gulp.task('default', function(){});

// Compile and combine all TypeScript files in ts/ into www/js/appBundle.js
gulp.task('ts', function(){
    gulp.src("ts/**/*.ts")
        .pipe(typescript({
            noImplicitAny: false,
            noEmitOnError: true,
            removeComments: true,
            sourceMap: true,
            out: "appBundle.js",
            target: "es5",
            sortOutput: true
        }))
        .pipe(gulp.dest("www/js/"))
    ;
});

// Minify and uglify all JavaScript files in www/js/ to into www/js/appBundle.min.js
gulp.task('min', function(){
    gulp.src('www/js/*.js')
        .pipe(concat('appBundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'))
    ;
});

// Compile all SASS (.scss) files to www/css/
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))   
    .pipe(gulp.dest('www/css/'));
});