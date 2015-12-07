angular.module('jasmineExample')
.controller('AddCtrl', function() {
  var self = this;

  self.giveMeATrue = function() {
    return true;
  };

  self.execute = function() {
    if (angular.isUndefined(self.summand1) ||
        angular.isUndefined(self.summand2)) {
          self.result = 'invalid!'
    }
    else self.result = self.summand1 + self.summand2;
  };
});
