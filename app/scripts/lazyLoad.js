/**
 * Created by Administrator on 2015/9/17.
 */
"use strict";


angular
    .module('sbAdmin')
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });


    }]);
