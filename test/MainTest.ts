import { Main } from "./../demoFunc/Main";
import { expect } from "chai";
import exp = require("constants");
describe("Main", async () => {
  describe("newGuid", async () => {
    it("Should create new guid", async () => {
      //Arrange
      let d = {
        id: "something",
      };
      let main = new Main(d);

      //Act
      let result = main.newGuid();

      //Assert
      expect(result).to.be.not.null;
    });
  });

  describe("getId", async () => {
    it("Should return something", async () => {
      //Arrange
      let d = {
        id: "something",
      };
      let main = new Main(d);

      //Act
      let result = main.getId();


      //Assert
      expect(result).to.be.not.null;
      expect(result).to.be.equal('something');
    });
  });
});
