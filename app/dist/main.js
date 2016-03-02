(function () {
    'use strict';
    
    // rename seed to your module name of choice. remember to edit the index.html: ng-app directive to match your module's name
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
