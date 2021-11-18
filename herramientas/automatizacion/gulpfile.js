const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
    cb();
});

gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

// npm run serve para abrir los cambios en el navegador