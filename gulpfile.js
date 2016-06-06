const gulp = require('gulp');
const semver = require('semver');

gulp.task('version', function(done) {
    const packageJson = require('./package.json');
    const expectedVersion = packageJson.engines.node;
    const actualVersion = process.version;
    console.log('Checking node version: ');
    if (semver.gt(expectedVersion,actualVersion)){
        console.log('Incorrect node version. Expected ' + expectedVersion +
        '. Actual: ' + actualVersion);
        process.exit(1);
    }
    done();
});

//default task
gulp.task('default', function(done) {
    console.log('BUILD OK');
    done();
});