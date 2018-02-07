const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//Compile Sass
gulp.task("sass",function(){
    return gulp.src("src/scss/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("src/css"))
       .pipe(browserSync.stream());
});

//Watch and Serve
gulp.task("serve",["sass"],function(){
    browserSync.init({
        server : "./src" 
    });

    gulp.watch(["src/scss/*.scss"],["sass"]);
    gulp.watch("src/*.html").on("change",browserSync.reload);
});

gulp.task("default",["serve"]);