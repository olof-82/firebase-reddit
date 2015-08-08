'use strict';

var redditControllers = angular.module('redditControllers', []);

redditControllers.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}]);

redditControllers.controller('PostsCtrl', ['$scope', function ($scope) {
  $scope.post = {url: "http://", title: ""};
  $scope.posts = [];

  $scope.addPost = function() {
    $scope.posts.push($scope.post);
    $scope.post = {url: "http://", title: ""};
  };

  $scope.deletePost = function(index) {
    $scope.posts.splice(index, 1);
  };

}]);
