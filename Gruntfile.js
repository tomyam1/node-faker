module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    init: true,  // call grunt.initConfig()
    config: require('./buildConfig')
  });
};

