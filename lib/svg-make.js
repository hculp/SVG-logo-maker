const { Triangle, Circle, Square } = require("./shapes.js");

function createFileContent(text, textColor, shape, shapeColor) {
    let shapeSelected;
    let svgFormat = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    if (shape === 'Triangle'){
        shapeSelected = new Triangle();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="150" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text> </svg>`;
    } else if (shape === 'Circle') {
        shapeSelected = new Circle();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text> </svg>`;
    } else if (shape === 'Square') {
        shapeSelected = new Square();
        shapeSelected.setColor(shapeColor);
        svgFormat += shapeSelected.render() + `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text> </svg>`;
    }
    return svgFormat;
}

module.exports = { createFileContent };