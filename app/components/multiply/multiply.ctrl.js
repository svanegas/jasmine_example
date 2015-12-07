angular.module('jasmineExample')
.controller('MultiplyCtrl', function() {
  var self = this;

  self.execute = function() {
    if (angular.isUndefined(self.factor1) ||
        angular.isUndefined(self.factor2)) {
          self.result = 'invalid!'
    }
    else self.result = self.subExecute(self.factor1, self.factor2);
  };

  self.subExecute = function(param1, param2) {
    if (param1 > 1000000 && param2 > 1000000) return "A lot!";
    return param1 * param2;
  }
});
