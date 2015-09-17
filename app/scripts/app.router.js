/**
 * Created by Administrator on 2015/9/17.
 */
"use strict";


angular.
    module('sbAdminApp')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                debug:false,
                events:true
            });

            $urlRouterProvider.otherwise('/dashboard/home');

            $stateProvider.state('dashboard',{
                url:'/dashboard',
                templateUrl:'views/dashboard/main.html',
                resolve:{
                    loadFiles: function ($ocLazyLoadProvider) {
                        return $ocLazyLoadProvider.load({
                            name:'ngFiles',
                            files:[
                                'bower_components/angular-animate/angular-animate.js',
                            ]
                        })
                    }
                }

            })
    }]);