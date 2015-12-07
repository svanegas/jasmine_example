angular.module('jasmineExample')
.config(function($stateProvider) {
  $stateProvider.state('divide', {
    url: '/divide',
    templateUrl: '/components/divide/divide.html',
    controller: 'DivideCtrl as divide'
  })
});
