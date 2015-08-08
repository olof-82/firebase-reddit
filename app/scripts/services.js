'use strict';

var redditServices = angular.module('redditServices', ['ngResource']);

redditServices.factory('Post', ['$resource', function ($resource) {
  return $resource('https://radiant-heat-3801.firebaseio.com/posts/:id.json');
}]);
