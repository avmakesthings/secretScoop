 module.exports = function(grunt) {
     grunt.initConfig({

         less: {
             development: {
                 options: {
                     paths: ["client/stylesheets"]
                 },
                 files: {"client/stylesheets/bootstrap_theme.css": "client/stylesheets/bootstrap_theme.less"}
             },
             production: {
                 options: {
                     paths: ["client/stylesheets"],
                     cleancss: true
                 },
                 files: {"client/stylesheets/bootstrap_theme.css": "client/stylesheets/bootstrap_theme.less"}
             }
         }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.registerTask('default', ['less']);
 };