/**
 * @author Aleksey Krasnobaev <a.krasnobaev@bdo.ru>
 */
'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-openui5');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Project configuration.
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    lconfig: grunt.file.readJSON('localconfig.json'),

    /**
     * build process
     */
    clean: {
      prepare: [
        '<%= pkg.directories.stage %>**',
        '<%= pkg.directories.process %>**',
        '<%= pkg.directories.finalize %>**',
        '<%= pkg.directories.out %>**',
      ],
      // process: {},
      finalize: [
        '<%= pkg.directories.stage %>**',
        '<%= pkg.directories.process %>**',
        '<%= pkg.directories.finalize %>**',
      ],
      localdbg: [
        '**/*-dbg.json',
        '**/*-dbg.js',
        '**/*-dbg.controller.js',
        '!src/app/ui/lib/thirdparty/**',
      ],
    },

    copy: {
      prepare: {
        cwd: '<%= pkg.directories.src %>',
        src: [
          '**/*',
          '**/.project',
        ],
        dest: '<%= pkg.directories.stage %>',
        expand: true,
      },
      process: {
        cwd: '<%= pkg.directories.stage %>',
        src: [
          '**/.project',
          '**/*.js',
          '**/*.html',
          '**/*.xml',
          '**/*.jpg',
          '**/*.png',
          '**/*.gif',
          '**/*.json',
          '**/*.properties',
          '**/*.css',
        ],
        dest: '<%= pkg.directories.process %>',

        expand: true,
        rename: function (dest, src) {
          var aSrc = src.split('.');
          var ext = aSrc.pop();
          if (ext === 'js' || ext === 'json') {
            if (aSrc.length > 1) {
              if (aSrc[aSrc.length - 1] === 'controller') {
                ext = aSrc.pop() + '.' + ext;
              }
            }
            return dest + aSrc.join('.') + '-dbg.' + ext;
          } else {
            return dest + src;
          }
        },
      },
      localdbg: {
        cwd: '<%= pkg.directories.src %>',
        src: [
          '**/*.json',
          '!**/*-dbg.json',
          '**/*.js',
          '!**/*-dbg.js',
          '!**/*-dbg.controller.js',
          '!app/ui/lib/thirdparty/**',
        ],
        dest: '<%= pkg.directories.src %>',

        expand: true,
        rename: function (dest, src) {
          var aSrc = src.split('.');
          var ext = aSrc.pop();
          if (ext === 'js' || ext === 'json') {
            if (aSrc.length > 1) {
              if (aSrc[aSrc.length - 1] === 'controller') {
                ext = aSrc.pop() + '.' + ext;
              }
            }
            console.log(dest + aSrc.join('.') + '-dbg.' + ext);
            return dest + aSrc.join('.') + '-dbg.' + ext;
          } else {
            console.log(dest + src);
            return dest + src;
          }
        },
      },
      finalize: {
        cwd: '<%= pkg.directories.process %>',
        src: [
          '**/*',
          '**/.project',
        ],
        dest: '<%= pkg.directories.out %>',
        expand: true,
      },
    },

    uglify: {
      options: {
        mangle: true,
        compress: {
          drop_console: true,
          dead_code: false,
          unused: false,
        },
      },
      files: {
        expand: true,
        cwd: '<%= pkg.directories.stage %>',
        src: ['**/*.js', '!test/**', '!test_local.html'],
        dest: '<%= pkg.directories.process %>',
      },
    },

    /**
     * copy *.js and *.controller.js files to create the dbg version
     */
    concat: {
      process: {
        files: [{
          expand: true,
          cwd: '<%= pkg.directories.stage %>',
          src: [
            '**/*.js',
            '**/*.html',
            '**/*.xml',
            '**/*.jpg',
            '**/*.png',
            '**/*.gif',
            '**/*.json',
            '**/*.properties',
          ],
          dest: '<%= pkg.directories.process %>',
          rename: function (dest, src) {
            var aSrc = src.split('.');
            var ext = aSrc.pop();
            if (ext === 'js') {
              if (aSrc.length > 1) {
                if (aSrc[aSrc.length - 1] === 'controller') {
                  ext = aSrc.pop() + '.' + ext;
                }
              }
              return dest + aSrc.join('.') + '-dbg.' + ext;
            } else {
              return dest + src;
            }
          },
        }],
      },
    },

    /**
     * make component preload
     */
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: '<%= pkg.directories.src %>' +
                 '<%= pkg.ui5.componentpath %>',
            prefix: '<%= pkg.name %>',
          },
          dest: '<%= pkg.directories.process %>' +
                '<%= pkg.ui5.componentpath %>',
        },
        components: '<%= pkg.ui5.components %>',
      },
      // @todo make library preload
    },

    jsdoc: {
      dist: {
        src: ['<%= pkg.directories.src %>', 'README.md'],
        jsdoc: './node_modules/.bin/jsdoc',
        options: {
          configure: 'jsdoc.conf.json',
          destination: '<%= pkg.directories.doc %>',
        },
      },
    },

    compress: {
      finalize: {
        options: {
          archive:
            '<%= pkg.directories.build %>' +
            '<%= pkg.name %>' + '-v' + '<%= pkg.version %>' +
            '.zip',
        },
        files: [{
          cwd: '<%= pkg.directories.out %>',
          src: [
            '**/*',
            '**/.project',
            '!app/ui/mock/**',
            '!app/ui/configs/customserver*',
            '!doc/**',
          ],
          dest: '',
          expand: true,
        }],
      },
    },
    /**
     * end of build process
     */

    /**
     * run a local web server with application
     * @todo minimize code
     */
    connect: {
      dev: {
        options: {
          open: 'http://localhost:8000/<%= pkg.ui5.urlprefix %>',
          port: 8000,
          // useAvailablePort: true,
          debug: true,
          keepalive: true,
        },
      },
      dist: {
        options: {
          open: 'http://localhost:8000/<%= pkg.ui5.urlprefix %>',
          port: 8000,
          // useAvailablePort: true,
          // debug: true,
          keepalive: true,
        },
      },
      devUi5Latest: {
        options: {
          open: 'http://localhost:8001/<%= pkg.ui5.urlprefix %>',
          port: 8001,
          // useAvailablePort: true,
          debug: true,
          keepalive: true,
        },
      },
      distUi5Latest: {
        options: {
          open: 'http://localhost:8001/<%= pkg.ui5.urlprefix %>',
          port: 8001,
          // useAvailablePort: true,
          // debug: true,
          keepalive: true,
        },
      },
    },
    openui5_connect: {
      dev: {
        options: {
          contextpath: '<%= pkg.ui5.urlprefix %>',
          appresources: [
            '<%= pkg.directories.src %>' + '<%= pkg.ui5.componentpath %>',
          ],
          resContext: 'sap/ui5/1',
          resources: ['<%= lconfig.sapui5 %>'],
        },
      },
      dist: {
        options: {
          contextpath: '<%= pkg.ui5.urlprefix %>',
          appresources: [
            '<%= pkg.directories.out %>' + '<%= pkg.ui5.componentpath %>',
          ],
          resContext: 'sap/ui5/1',
          resources: ['<%= lconfig.sapui5 %>'],
        },
      },
      devUi5Latest: {
        options: {
          contextpath: '<%= pkg.ui5.urlprefix %>',
          appresources: [
            '<%= pkg.directories.src %>' + '<%= pkg.ui5.componentpath %>',
          ],
          resContext: 'sap/ui5/1',
          resources: ['<%= lconfig.sapui5Latest %>'],
        },
      },
      distUi5Latest: {
        options: {
          contextpath: '<%= pkg.ui5.urlprefix %>',
          appresources: [
            '<%= pkg.directories.out %>' + '<%= pkg.ui5.componentpath %>',
          ],
          resContext: 'sap/ui5/1',
          resources: ['<%= lconfig.sapui5Latest %>'],
        },
      },
    },

    concurrent: {
      dev: ['openui5_connect:dev', 'openui5_connect:devUi5Latest'],
      dist: ['openui5_connect:dist', 'openui5_connect:distUi5Latest'],
    },

    shell: {
      /**
       * upload task
       */
      zipui_src: {
        command: [
          'cd src',
          'zip <%= pkg.directories.upload %>' +
              '<%= pkg.name %>ui-src.zip -r ./app/ui ' +
              '-x@../.uploadignore',
        ].join('&&'),
      },

      upload_ui_dist: {
        command: [
          'cp <%= pkg.directories.build %>' +
                  '<%= pkg.name %>' + '-v' + '<%= pkg.version %>' + '.zip ' +
             '<%= pkg.directories.upload %>'  +
                  '<%= pkg.name %>' + 'ui.zip',
        ].join('&&'),
      },

      /**
       * decode downloaded mock data
       */
      updateMockData: {
        command: 'node updateMockData.js',
      },
    },

  });

  grunt.registerTask('default', 'upload');

  /**
   * local server tasks
   */
  grunt.registerTask('serve', function (mode, bBoth) {
    if (bBoth === 'both') {
      grunt.task.run('concurrent:' + mode);
    } else {
      grunt.task.run('openui5_connect:' + (mode || 'dev'));
    }
  });

  /**
   * upload tasks
   */
  grunt.registerTask('upload-ui-src', 'shell:zipui_src');
  grunt.registerTask('upload-ui-dist', 'shell:upload_ui_dist');
  grunt.registerTask('upload', 'upload-dist');

  grunt.registerTask('updateMock', 'shell:updateMockData');

  /**
   * build task
   */
  grunt.registerTask('build', [
    'clean:prepare',
    'copy:prepare',
    // 'jshint:process',
    'uglify',
    /*'concat:process',*/ 'openui5_preload',
    // 'clean:process', //?
    'copy:process',
    // 'concat:finalizeJS', //?
    // 'concat:finalizeML', //?
    // 'concat:finalizeProp', //?
    'copy:finalize',
    // 'updateVersion',
    'doc',
    'compress:finalize',
    'clean:finalize',
    'upload-ui-src',
    'upload-ui-dist',
  ]);

  grunt.registerTask('localdbg', 'copy:localdbg');

  grunt.registerTask('doc', function () {
    var tasks = ['jsdoc:dist'];

    // Use the force option for all tasks declared in the previous line
    grunt.option('force', true);
    grunt.task.run(tasks);
  });

};
