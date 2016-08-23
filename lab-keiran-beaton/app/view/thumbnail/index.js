'use strict';
const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

function ThumbnailController($rootScope) {
  this.images = $rootScope.imageData;
}
