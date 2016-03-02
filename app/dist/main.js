(function () {
    'use strict';
    
    var app = angular.module('seed', [
        'angular-storage',
        'blockUI',
        'datatables',
        'datatables.bootstrap',
        'jcs-autoValidate',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'ui.router' 
    ]);
    
})();

(function () {
    var app = angular.module('seed');
    
    var routeConfig = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
       
        $stateProvider.state('home', {
            template: '<h1 class="text-center">Angular seed by Andrei Mari Panaligan</h1>',
            url: '/home'
        });
        
        $urlRouterProvider.otherwise('/home');
    }];
    
    app.config(routeConfig);
})();
