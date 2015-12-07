angular.module('jasmineExample.services')
.factory('divider', function($q, $timeout) {

  function compute(dividend, divisor) {
    return $q(function(resolve, reject) {
      $timeout(function() {
        if (divisor == 0) reject({ status: 400, content: 'By zero!' });
        else resolve({ status: 200, content: dividend / divisor });
      }, 1000);
    });
  };

  return {
    'compute': compute
  };
});
