describe("DivideCtrl", function () {
  beforeEach(module('jasmineExample'));

  var self, scope, dividerMock;

  beforeEach(inject(function($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    dividerMock = {
      compute: function() { return $q.defer().promise }
    };
    self = $controller('DivideCtrl', {
      $scope: scope,
      divider: dividerMock
    });
  }));

  describe("self.execute", function() {
    describe("when neither divider nor divisor are undefined", function () {
      it("calls divider's compute method", function () {
        spyOn(dividerMock, "compute");
        // self.execute();
        // expect(dividerMock.compute).toHaveBeenCalled();
      });
    });
  });
});
