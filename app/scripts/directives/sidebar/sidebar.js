/**
 * Created by Administrator on 2015/9/18.
 */
"use strict";

angular.module('sbAdminApp')
    .directive('sidebar', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/directives/sidebar/sidebar.html',
            replace: true,
            scope: {},
            controller: function ($scope) {
                $scope.selectedMenu = 'dashboard';
                $scope.collapseVar = 0;
                $scope.multiCollapseVar = 0;

                $scope.check = function (x) {

                    if (x == $scope.collapseVar)
                        $scope.collapseVar = 0;
                    else
                        $scope.collapseVar = x;
                };

                $scope.multiCheck = function (y) {

                    if (y == $scope.multiCollapseVar)
                        $scope.multiCollapseVar = 0;
                    else
                        $scope.multiCollapseVar = y;
                };
            }
        }
    });