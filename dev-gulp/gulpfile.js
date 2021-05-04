//****************************************
//**************  G U L P  ***************
//****************************************
const themename = 'devwp';

//********************************************************
//**************  GULP NEEDS STUFF TO WORK ***************
//********************************************************
const gulp             = require('gulp'),
      autoprefixer     = require('gulp-autoprefixer'),
      browserSync      = require('browser-sync').create(),
      sass             = require('gulp-sass'),
      cleanCSS         = require('gulp-clean-css'),
      sourcemaps       = require('gulp-sourcemaps'),
      concat           = require('gulp-concat'),
      uglify           = require('gulp-uglify');


//********************************************************
//************  TELL GULP WHERE STUFF IS *****************
//********************************************************
const root             = '../' + themename + '/',
      scss             = root + 'sass/',
      js               = root + 'src/js/',
      jsDIST           = root + 'dist/js/';


//********************************************************
//**********  KEEP YOUR EYES PEELED - WATCH **************
//********************************************************
const phpWatchFiles    = root + '**/*.php',
      styleWatchFiles  =  scss + '**/*.scss';


//********************************************************
//************* LETS CRUSH THIS TOGETHER *****************
//********************************************************

// Need to add more javascript files to the project?
//  - Add "js + filename with a comma where relevant
//  - Make sure the file is located in devwp/src/js/
//  - Order matters!

const jsSRC = [
    js + 'foundation.min.js',
    js + 'what-input.js',
    js + 'app.js',
    js + 'custom-scripts.js'
];

// Need to add more css files to the project?
//  - Add "root + filename with a comma where relevant
//  - Order matters!

const cssSRC = [
    root + 'webfonts/stylesheet.css',
    root + 'src/css/foundation.min.css',
    root + 'src/css/foundation-icons.css',
    root + 'main.css'
];


//********************************************************
//*************** GOTTA GET FUNCTIONAL *******************
//********************************************************
function css() {
    return gulp.src([scss + 'main.scss'])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(root));
}

function concatCSS() {
    return gulp.src(cssSRC)
        .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
        .pipe(concat('main.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest(root + 'dist/css/'));
}

function javascript() {
    return gulp.src(jsSRC)
        .pipe(concat('devwp.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDIST));
}

function watch() {
    browserSync.init({
        open:'external',
        proxy: 'mothers-day.local', //switch this to whatever local generates
        port: 3000
    });

    gulp.watch(styleWatchFiles, gulp.series([css, concatCSS]));
    gulp.watch(jsSRC, javascript);
    gulp.watch([phpWatchFiles, jsDIST + 'devwp.js', root + 'dist/css/main.min.css']).on('change', browserSync.reload);
}

//********************************************************
//***************** EXPORT SOME STUFF ********************
//********************************************************
exports.css = css;
exports.concatCSS = concatCSS;
exports.javascript = javascript;
exports.watch = watch;

//********************************************************
//****************** LETS DO THIS ************************
//********************************************************
var build = gulp.parallel (watch);
gulp.task('default', build);