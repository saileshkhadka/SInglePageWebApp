var app = angular.module('single-page-app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/Facebook', {
            templateUrl: 'Facebook.html'
        })
        .when('/Gmail', {
            templateUrl: 'Gmail.html'
        })
        .when('/Youtube', {
            templateUrl: 'Youtube.html'
        })
        .when('/Twitter', {
            templateUrl: 'Twitter.html'
        });
});
    app.controller("MyController", MyController);

    function MyController($scope, $window) {
        $scope.openLinkWindow = function (ch) {
            if (ch === 'facebook') {
                var url = 'https://www.facebook.com';
                window.open(url, 'facebook');
            }
            else if (ch === 'gmail') {
                url = 'https://www.gmail.com';
                window.open(url, 'gmail');
            }
            else if (ch === 'youtube') {
                url = 'https://www.youtube.com';
                window.open(url, 'youtube');
            }
        };
    }