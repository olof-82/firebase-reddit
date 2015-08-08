'use strict';

var app = angular.module('firebaseRedditApp', [
  'ngRoute',
  'redditControllers',
  'redditServices'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
