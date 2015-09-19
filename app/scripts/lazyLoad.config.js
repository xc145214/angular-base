/**
 * Created by Administrator on 2015/9/17.
 */
"use strict";


angular
    .module('sbAdminApp')
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: [{
                name: 'ngAnimate',
                files: ['bower_components/angular-animate/angular-animate.js']
            }

            ]
        });


    }]);
