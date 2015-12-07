angular.module('jasmineExample')
.controller('DivideCtrl', function(divider) {
  var self = this;

  self.execute = function() {
    if (angular.isUndefined(self.dividend) ||
        angular.isUndefined(self.divisor)) {
          self.result = 'invalid!'
    }
    divider.compute(self.dividend, self.divisor)
      .then(function(data) {
        self.result = data.content;
      }, function(data) {
        self.result = "CAGADA: " + data.content;
      });
  };
});
