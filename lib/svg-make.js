const { Triangle, Circle, Square } = require("./shapes.js");

function createFileContent(text, textColor, shape, shapeColor) {

    let shapeSelected;
    // Start of string of svg content for file creation that is will be added on to
    let svgFormat = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    // Checks which shape is selected and then creates a new class instantiation of that shape
    // The newly created shape object's color is set by calling the inherited class function setColor()
    // The rest of svstring for the svg file content is filled by calling the shape's render function and added string with text content and color, which is returned to be used in the file creation
    if (shape === 'Triangle') {
        shapeSelected = new Triangle();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    } else if (shape === 'Circle') {
        shapeSelected = new Circle();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    } else if (shape === 'Square') {
        shapeSelected = new Square();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
    return svgFormat;
}

module.exports = { createFileContent };