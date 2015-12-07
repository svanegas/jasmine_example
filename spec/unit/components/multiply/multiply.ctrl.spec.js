describe("MultiplyCtrl", function () {
  beforeEach(module('jasmineExample'));

  var self;

  beforeEach(inject(function($controller) {
    self = $controller('MultiplyCtrl', { });
  }));

  describe("self.execute", function() {
    describe("when a factor is undefined", function () {
      it("doesn't call self.subExecute method", function () {
        self.factor1 = undefined;
        self.factor2 = 2;
        spyOn(self, "subExecute");
        self.execute();
        expect(self.subExecute).not.toHaveBeenCalled();
      });
    });

    describe("when both factors are defined", function () {
      it("calls self.subExecute with both factors", function () {
        self.factor1 = 10;
        self.factor2 = 5;
        spyOn(self, "subExecute");
        self.execute();
        expect(self.subExecute).toHaveBeenCalledWith(10, 5);
        // TODO: Make an example with object as parameter.
      });
    });
  });

  describe("self.subExecute", function () {
    describe("when a params is less or equal than million", function () {
      it("returns the product between the two params", function () {
        expect(self.subExecute(10, 20)).toEqual(200);
      });
    });

    describe("when both params are greater than million", function () {
      it("returns 'A lot!'", function () {
        expect(self.subExecute(1000001, 1000001)).toEqual('A lot!');
      });
    });
  });
});
