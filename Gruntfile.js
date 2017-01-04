module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style1.css": "less/style1.less", // destination file and source file
          "css/style2.css": "less/style2.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less','Gruntfile.js'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
