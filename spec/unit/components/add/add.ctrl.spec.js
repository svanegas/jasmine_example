describe("AddCtrl", function () {
  beforeEach(module('jasmineExample'));

  var self;

  beforeEach(inject(function($controller) {
    self = $controller('AddCtrl', { });
  }));


  describe("self.giveMeATrue", function () {
    it("returns true", function () {
      expect(self.giveMeATrue()).toBeTruthy();
    });
  });

  describe("self.execute", function() {
    describe("when self.summand1 is undefined", function () {
      it("sets self.resut to 'invalid!'", function () {
        self.summand1 = undefined;
        self.summand2 = 5;
        self.execute();
        expect(self.result).toEqual('invalid!');
      });
    });

    describe("when both summands are defined", function () {
      it("doesn't set self.result to 'invalid!'", function () {
        self.summand1 = 5;
        self.summand2 = 10;
        self.execute();
        expect(self.result).not.toEqual('invalid!');
      });
    });

    describe("when both summands are negative", function () {
      it("sets a negative value to self.result", function () {
        self.summand1 = -1;
        self.summand2 = -5;
        self.execute();
        expect(self.result).toBeLessThan(0);
      });
    });
  });
});
