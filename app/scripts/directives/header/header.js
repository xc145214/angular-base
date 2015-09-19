/**
 * Created by Administrator on 2015/9/18.
 */

"use strict";

angular.module('sbAdminApp')
    .directive('header', function () {
        return {
            templateUrl: 'scripts/directives/header/header.html',
            restrict: 'E',
            replace: true
        }
    });