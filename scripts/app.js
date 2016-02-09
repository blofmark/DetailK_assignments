angular.module('myApp',
    [
        'ngRoute',
        'myApp.controllers',
        'myApp.factory'
    ])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'templates/assignment1.html',
                    controller: 'task1Ctrl',
                    title: 'Assignment 1'
                }).
                when('/assignment2', {
                    templateUrl: 'templates/assignment2.html',
                    controller: 'task2Ctrl',
                    title: 'Assignment 2'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }])




