'use strict';

var redditControllers = angular.module('redditControllers', []);

redditControllers.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}]);

redditControllers.controller('PostsCtrl', ['$scope', 'Post', function ($scope, Post) {
  $scope.post = {url: "http://", title: ""};
  $scope.posts = Post.all;

  $scope.addPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {url: "http://", title: ""};
    });
  };

  $scope.deletePost = function (post) {
    Post.delete(post);
  };

}]);
