var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');

gulp.task('default', function(){});

// Compile and combine TypeScript files into appBundle.js
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

// Minify and uglify JavaScript files.
gulp.task('min', function(){
    gulp.src('www/js/*.js')
        .pipe(concat('combined.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'))
    ;
});