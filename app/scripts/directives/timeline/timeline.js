/**
 * Created by Administrator on 2015/9/19.
 */
'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .directive('timeline', function () {
        return {
            templateUrl: 'scripts/directives/timeline/timeline.html',
            restrict: 'E',
            replace: true,
        }
    });