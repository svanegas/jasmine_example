angular.module('jasmineExample')
.config(function($stateProvider) {
  $stateProvider.state('multiply', {
    url: '/multiply',
    templateUrl: '/components/multiply/multiply.html',
    controller: 'MultiplyCtrl as multiply'
  })
});
