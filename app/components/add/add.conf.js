angular.module('jasmineExample')
.config(function($stateProvider) {
  $stateProvider.state('add', {
    url: '/add',
    templateUrl: '/components/add/add.html',
    controller: 'AddCtrl as add'
  })
});
