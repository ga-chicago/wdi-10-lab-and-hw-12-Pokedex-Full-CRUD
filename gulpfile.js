const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less',()=>{ // Creats a gulp task for changing my less into css file in css folder
	gulp.src('./less/style.less').pipe(less()).pipe(gulp.dest('./public/css/'));
});

gulp.task('watch',()=>{
	gulp.watch(['./less/*.less'],['less']); // Task looks for any changes in the less folders .less files and runs the less task on it if it detects a change
});

gulp.task('default',['less','watch']); 