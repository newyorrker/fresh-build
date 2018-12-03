const gulp 						= require('gulp');
const config       		= require('./config');
const gulpLoadPlugins = require('gulp-load-plugins');
const autoprefixer 		= require('autoprefixer');
const mqpacker        = require('css-mqpacker');
const csso 						= require('postcss-csso');

const $ = gulpLoadPlugins();

gulp.task('copy', function () {
		console.log($);
    // gulp.src('./src/templates/index.html')
    //     .pipe(gulp.dest('./public/'));
});