'use strict';

var app = angular.module('firebaseRedditApp', [
  'ngRoute',
  'redditControllers',
  'redditServices',
  'firebase'
]);

app.constant('FIREBASE_URL', 'https://radiant-heat-3801.firebaseio.com/');

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
