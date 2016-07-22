
import gulp from 'gulp';

let $ = require('gulp-load-plugins')();
import size from 'gulp-size';

import del from 'del';

import {
  DIR_NODE, 
  DIR_WEB_FRONT,
  DIR_DEST_JS,
  DIR_DEST_CSS,
} from './gulp/constants'


// Styles
import sassTask from './gulp/sass'
gulp.task('styles', ['sass-app']);
gulp.task('sass-app', sassTask(DIR_WEB_FRONT + '/css', DIR_DEST_CSS));

// Scripts
import {scriptWatchTask, scriptBuildTask} from './gulp/script'
gulp.task('scripts', ['scripts-app']);
gulp.task('buildScripts', ['buildScripts-app']);

gulp.task('scripts-app', scriptWatchTask(DIR_WEB_FRONT + '/js/app.js', DIR_DEST_JS));
gulp.task('buildScripts-app', scriptBuildTask(DIR_WEB_FRONT + '/js/app.js', DIR_DEST_JS));

// Clean
gulp.task('clean', cb => {
  del.sync([DIR_DEST_JS, DIR_DEST_CSS]);
  cb();
});

// Bundle
gulp.task('bundle', ['styles', 'scripts']);
gulp.task('buildBundle', ['styles', 'buildScripts']);

// Assets
gulp.task('assets', ['assets:font-awesome', 'assets:bootstrap'], () => {
  return gulp.src([DIR_WEB_FRONT + '/assets/**/*'])
    .pipe(gulp.dest(DIR_DEST))
    .pipe(size());
});

gulp.task('assets:font-awesome', () => {
  gulp.src([DIR_NODE + '/font-awesome/fonts/**/*'], {base: DIR_NODE + '/font-awesome/'})
    .pipe(size({title: 'font-awesome'}))
    .pipe(gulp.dest(DIR_DEST + '/css'));
});

gulp.task('assets:bootstrap', () => {
  gulp.src([DIR_NODE + '/bootstrap-sass/assets/fonts/**/*'], {base: DIR_NODE + '/bootstrap-sass/assets/'})
    .pipe(size({title: 'bootstrap'}))
    .pipe(gulp.dest(DIR_DEST + '/css'));
});

gulp.task('dev-assets', () => {
  return gulp.src([DIR_WEB_FRONT + '/dev/**/*'])
    .pipe(gulp.dest(DIR_DEST))
    .pipe(size());
});

gulp.task('watch', ['bundle'/*, 'assets'*/], () => {
  gulp.watch([DIR_WEB_FRONT + '/**/*.scss', DIR_WEB_FRONT + '/**/*.css'], ['styles']);
  //gulp.watch(DIR_WEB_FRONT + '/assets/**/*', ['assets']);
  //gulp.watch(DIR_WEB_FRONT + '/dev/**/*', ['dev-assets']);
});


import {uglifyTask} from './gulp/script'
gulp.task('build', ['buildBundle', 'assets'], () => {
  uglifyTask(DIR_DEST_JS);
});

// Default task
gulp.task('default', ['clean', 'build']);
