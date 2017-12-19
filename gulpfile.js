var gulp = require('gulp');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var	uglify=require('gulp-uglify');
var	rename=require('gulp-rename');
gulp.task("jsconcat",function(){
	gulp.src(['./script/a.js','./script/b.js'])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./dest/js'))
})
gulp.task('default',["jsconcat",]);