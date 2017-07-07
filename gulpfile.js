var gulp = require('gulp');

gulp.task("copyfiles", function() {
	gulp.src("index.html").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatch"));
})
gulp.task("images", function() {
	gulp.src("images/**/*.{jpg,png,gif}").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatch\\images"));
})
gulp.task("copyhtml", function() {
	gulp.src("html/*.html").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatch\\html"));
})
gulp.task("copycss", function() {
	gulp.src("css/*.css").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatch\\css"));
})
gulp.task("copyjs", function() {
	gulp.src("js/*.js").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatch\\js"));
})

gulp.task("build", ["copyfiles", "images", "copyhtml", "copycss", "copyjs"], function() {
	console.log("复制完成");
})
gulp.task("watch", function() {
	gulp.watch("index.html", ["copyfiles"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("html/*.html", ["copyhtml"]);
	gulp.watch("css/*.css", ["copycss"]);
	gulp.watch("js/*.js", ["copyjs"]);
})
gulp.task("copyalll", function() {
	gulp.src("FashionWatch/**/**/*")
	.pipe(gulp.dest("D:\\php\\WWW\\day31"));
})