module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
          options: {
              style: 'compressed',
              sourcemap: 'none'
          },
          files: {
            'css/application.css': 'scss/application.scss'
          }
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      vendor: {
        files: {
          'js/vendor.min.js': [
            'js/vendor/ofi.min.js',
            'js/vendor/matchMedia.js',
            'js/vendor/slick.js'
          ]
        }
      },
      custom: {
        files: {
          'js/app.min.js': [
            'js/custom/app.js'
          ]
        }
      }
    },

    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
            spawn: false
        }
      } 
    }

  });

  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'uglify']);
  grunt.registerTask('styles', ['sass']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

};
