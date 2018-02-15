const gulp = require("gulp");
const sass = require("gulp-sass");
const concatenate = require("gulp-concat");

const vendorJsFiles = [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/tether/dist/js/tether.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
];

//const sassFiles = ["node_modules/bootstrap/scss/bootstrap.scss","public/scss/*.scss","./src/styles/myVariables.scss",];
const sassFiles = ["./node_modules/tether/dist/css/tether.css","node_modules/bootstrap/scss/bootstrap.scss","public/scss/*.scss","./src/styles/myVariables.scss",];


gulp.task("sass",function(){
    gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest("public/css"));
});

gulp.task("js:vendor", () => {
    gulp
      .src(vendorJsFiles)
      .pipe(concatenate("vendor.min.js"))
      .pipe(gulp.dest("./public/js/"));
  });
  
  gulp.task("build", ["sass", "js:vendor"]);

  gulp.task("watch", () => {
    gulp.watch(sassFiles, ["sass"]);
  });
  
  gulp.task("default", ["watch"]);



