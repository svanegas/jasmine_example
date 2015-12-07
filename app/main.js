angular.module('jasmineExample.services', []);

angular.module('jasmineExample', ['ui.router', 'jasmineExample.services'])
.config(function($urlRouterProvider) {
  // when there is an empty route, redirect to landing
  $urlRouterProvider.otherwise('/add');
});
