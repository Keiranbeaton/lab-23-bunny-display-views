'use strict';
require('./error.scss');

const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('ErrorController', ['$rootScope', function($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}]);
