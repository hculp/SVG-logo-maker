const { Triangle, Circle, Square } = require("./shapes.js");

// Unit testing for a triangle with a blue background to render
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
});

// Unit testing for a circle with a #000000 background to render
describe("Circle test", () => {
    test("test for a circle with a #000000 background", () => {
        const shape = new Circle();
        shape.setColor("#000000");
        expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#000000" />'
        );
    });
});
// Unit testing for a square with a red background to render
describe("Square test", () => {
    test("test for a square with a red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="red" />'
        );
    });
});
