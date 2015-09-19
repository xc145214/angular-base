/**
 * Created by Administrator on 2015/9/17.
 */
"use strict";


angular.
    module('sbAdminApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('dashboard');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'views/dashboard/main.html',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'sbAdminApp',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                ]
                            })
                        }
                    }
                }).state('dashboard.home',{
                    url:'/home',
                    templateUrl:'views/dashboard/home.html',
                    controller:'MainCtrl',
                    resolve: {
                        loadMyFiles:function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'sbAdminApp',
                                files:[
                                    'scripts/controllers/main.js',
                                    'scripts/directives/timeline/timeline.js',
                                    'scripts/directives/notifications/notifications.js',
                                    'scripts/directives/chat/chat.js',
                                    'scripts/directives/dashboard/stats/stats.js'
                                ]
                            })
                        }
                    }
                }).state('pages',{
                    url:'/pages',
                    templateUrl: 'views/pages/main.html'
                }).state('pages.blank',{
                    url:'/blank',
                    templateUrl: 'views/pages/blank.html'
                }).state('signin',{
                    url:'/signin',
                    templateUrl:'views/pages/signin.html'
                })
        }]);