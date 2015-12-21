'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        // these were in the application css are before
        'public/lib/angular-toastr/dist/angular-toastr.css',
        'public/lib/angular-bootstrap/ui-bootstrap-csp.css',
        'public/lib/angular-bootstrap-datetimepicker/src/css/datetimepicker.css'
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        'public/lib/angular-toastr/dist/angular-toastr.js',
        'public/lib/angular-toastr/dist/angular-toastr.tpls.js',
        'public/lib/angular-bootstrap-confirm/dist/angular-bootstrap-confirm.min.js',
        'public/lib/lodash/lodash.min.js',
        'public/lib/d3/d3.min.js',
        'public/lib/angularD3/dist/angularD3.js',
        'public/lib/moment/moment.js',
        'public/lib/moment-timezone/moment-timezone.js',
        'public/lib/angular-moment/angular-moment.js',
        'public/lib/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
        // these were in the applicaiton js area before
        'public/lib/ngmap/build/scripts/ng-map.js',
		'public/lib/moment-timezone-data.js',
		'public/lib/readable-range.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css',
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
