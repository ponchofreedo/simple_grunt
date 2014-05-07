(function(){
"use strict";

    module.exports = function (grunt) {

        /*
            Grunt installation:
            -------------------
                npm install -g grunt-cli
                npm install -g grunt-init

            Project Dependencies:
            ---------------------
                npm install grunt --save-dev
                npm install load-grunt-tasks --save-dev
                npm install time-grunt --save-dev
                npm install grunt-contrib-connect --save-dev
                npm install connect-livereload --save-dev
                npm install grunt-contrib-watch --save-dev
                npm install grunt-open --save-dev

            Simple Dependency Install:
            --------------------------
                npm install (from the same root directory as the `package.json` file)

            Gem Dependencies:
            -----------------
                gem install image_optim

        */

        // show elapsed time at the end
        require('time-grunt')(grunt);

        // load all grunt tasks
        require('load-grunt-tasks')(grunt);

        // Project configuration.
        grunt.initConfig({

            // Store your Package file so you can reference its specific data whenever necessary
            pkg: grunt.file.readJSON('package.json'),

            // configurable paths
            paths: {
                email: './template',
                dist: './public'
            },

            watch: {
                css: {
                    files: ['Gruntfile.js'],
                    tasks: ['dev']
                },
                livereload: {
                    options: {
                        livereload: true
                    },
                    files: ['<%= paths.email %>/**/*.html']
                }
            },

            connect: {
                server: {
                    options: {
                        port: 8000,
                        base: './template',
                        livereload: true
                    }
                }
            },

            open: {
                dev : {
                    path: 'http://localhost:8000'
                }
            }

        });

        // Server Task
         grunt.registerTask('serve', [
            'connect',
            'open',
            'watch'
        ]);

        // (helper task)
        grunt.registerTask('dev', [
            'watch'
        ]);

    };

}());