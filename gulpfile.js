var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');

// Paths to variosu files
var paths = {
	scripts: ['src/js/perfmatters.js','src/views/js/main.js'],
	style: ['src/css/*.css', 'src/views/css/*.css'],
	images: ['src/img/*.jpg','src/img/*.png','src/views/images/*.jpg','src/views/images/*.png'],
	content: ['src/*.html','src/views/pizza.html']
};

// minify js files and outputs them to build
gulp.task('minify-script',function() {
	gulp.src(paths.scripts[0])
		.pipe(uglify())
		.pipe(gulp.dest('build/js/'));
	gulp.src(paths.scripts[1])
		.pipe(uglify())
		.pipe(gulp.dest('build/views/js/'));
});

// minify css files and output them to build
gulp.task('minify-style', function() {
	gulp.src(paths.style[0])
		.pipe(minifyCSS())
		.pipe(gulp.dest('build/css/'));
	gulp.src(paths.style[1])
		.pipe(minifyCSS())
		.pipe(gulp.dest('build/views/css/'));		
});

// minify image files and output them to build
gulp.task('minify-image',function() {
	gulp.src(paths.images[0])
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('build/img/'));

	gulp.src(paths.images[1])
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('build/img/'));

	gulp.src(paths.images[2])
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('build/views/images/'));

	gulp.src(paths.images[3])
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('build/views/images/'));		
});

// minify html files and output them to build
gulp.task('minify-html',function() {
	gulp.src(paths.content[0])
		.pipe(minifyHTML())
		.pipe(gulp.dest('build/'));
	gulp.src(paths.content[1])
		.pipe(minifyHTML())
		.pipe(gulp.dest('build/views/'));	
});

// Wathes for changes to our files and executes required scripts
gulp.task('watch',function() {
	gulp.watch(paths.scripts,['minify-script']);
	gulp.watch(paths.style,['minify-style']);
	gulp.watch(paths.images,['minify-image']);
	gulp.watch(paths.content,['minify-html']);
});

gulp.task('default',['minify-script','minify-style','minify-image','minify-html','watch']);