module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true,
        compress: true
      },
      build: {
        // src: 'build/<%= pkg.name %>.js',
        src: 'build/build.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    watch: {
      scripts: {
        files: ['/**/*.js'],
        tasks: ['exec:build'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      test: {
        files: ['test/**/*'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    mocha : {
      test: {
        options: {
          // mocha options
          urls: ['http://localhost:9000/test/index.html'],
          reporter: 'Spec',
          log: true,
          // Indicates whether 'mocha.run()' should be executed in
          // 'bridge.js'
          run: true,

          timeout: 10000
        }
      }
    },


    exec: {
      install : {
        cmd: './node_modules/.bin/component-install'
      },
      build: {
        cmd: './node_modules/.bin/component-build'
      }
    },

    connect: {
      options: {
        port  : 9000,
        hostname : '0.0.0.0'
      },
      dev : {
        options : {
          middleware : function(connect) {
            return [
              connect.static(require('path').resolve('.'))
            ];
          }
        }
      }
    }



  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-exec');


  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('dev', ['exec:build', 'connect:dev', 'watch']);
  grunt.registerTask('build', ['exec', 'uglify']);
  grunt.registerTask('test', ['build', 'connect', 'mocha']);

};