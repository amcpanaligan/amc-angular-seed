(function () {
    'use strict';
    
    var app = angular.module('seed');
    
    var routeConfig = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // define temporary state. ensure that routing works perfectly
        $stateProvider.state('home', {
            template: '<h1 class="text-center">Angular seed by Andrei Mari Panaligan</h1>',
            url: '/home'
        });
        
        $urlRouterProvider.otherwise('/home');
    }];
    
    app.config(routeConfig);
})();
