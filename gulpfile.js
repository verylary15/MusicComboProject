// 基础gulp模块
var gulp = require('gulp');
// webserver服务器模块
var webserver = require('gulp-webserver');

gulp.task('copy-index', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./www'));
});

gulp.task("cssTask", function() {
    return gulp.src('./src/css/*.*')
        .pipe(gulp.dest('./www/css'));
});

gulp.task("jsTask", function() {
    return gulp.src('./src/js/*.*')
        .pipe(gulp.dest('./www/js'));
});

gulp.task("htmlTemplateTask", function() {
    return gulp.src('./src/template/*.*')
        .pipe(gulp.dest('./www/template'));
});

gulp.task("fontsTask", function() {
    return gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('./www/fonts'));
});

//创建本地服务器任务
gulp.task('webserver', function() {
    gulp.src('./www')
        .pipe(webserver({
            livereload: false,
            directoryListing: false,
            open: true,
        })); // end gulp
});

//监听操作
gulp.task("watch",function(){
	gulp.watch('./src/index.html',['copy-index']);
	gulp.watch('./src/css/*.*',['cssTask']);
	gulp.watch('./src/js/*.*',['jsTask']);
	gulp.watch('./src/template/*.*',['htmlTemplateTask']);
});

gulp.task('default', ['webserver', 'watch'])
