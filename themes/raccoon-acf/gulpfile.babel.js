import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify-es';

// define import and export paths
const paths = {
	styles: {
		src: ['assets/dev/css/**/*.css'],
		dest: 'assets/dist/css',
	},
	scripts: {
		src: 'assets/dev/js/**/*.js',
		dest: 'assets/dist/js',
	},
};

// handle styles
export const styles = () => {
	return gulp
		.src(paths.styles.src)
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(paths.styles.dest));
};

export const scripts = () => {
	return gulp.src(paths.scripts.src).pipe(uglify()).pipe(gulp.dest(paths.scripts.dest));
};

export const watch = () => {
	gulp.watch(paths.styles.src, gulp.series(styles));
	gulp.watch(paths.scripts.src, gulp.series(scripts));
	gulp.watch('**/*.php **/*.css **/*.js');
};

export default gulp.series(watch);
