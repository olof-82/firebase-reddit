'use strict';

var redditServices = angular.module('redditServices', ['firebase']);

redditServices.factory('Post', ['$firebaseArray', 'FIREBASE_URL', function ($firebaseArray, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebaseArray(ref);

  var Post = {
    all:posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return posts.$get(postId);
    },
    delete: function(post) {
      return posts.$remove(post);
    }
  };

  return Post;
}]);
