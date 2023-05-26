// Class parent for shapes
class Shape {
    constructor() {
        this.color = '';
    }

    // Each shape has a setColor function that's inherited for setting the color
    setColor(color) {
        this.color = color;
    }
}

// Each child class then renders their corresponding shape as a string in the format of part of asvg file format with the set color from the parent function
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };