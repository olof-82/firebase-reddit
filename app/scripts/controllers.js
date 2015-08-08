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
  $scope.posts = Post.get();

  $scope.addPost = function() {
    Post.save($scope.post, function(ref) {
      $scope.posts[ref.name] = $scope.post;
      $scope.post = {url: "http://", title: ""};
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete({id: postId}, function() {
      delete $scope.posts[postId];
    });
  };

}]);
