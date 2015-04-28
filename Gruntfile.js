/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/main.css": "css/main.less"
        }
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      files: ['css/*.less'],
      tasks: ['less']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['less', 'watch']);

};
