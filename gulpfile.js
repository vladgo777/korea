const { series, parallel, dest, src, watch } = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sassmixins = require('gulp-sass-to-postcss-mixins');

function sassTask() {
	return src('build/scss/*.scss')
		.pipe(sass())
		.pipe(sassmixins())
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(dest('build/css'))
		.pipe(browserSync.stream());
}

function browserSyncTask() {
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		notify: false
		});
	
	watch('build/**/*.scss', sassTask);
	watch('build/*.html').on('change', browserSync.reload);
	watch('build/js/*.js').on('change', browserSync.reload);	
}

exports.default = series(sassTask, browserSyncTask);