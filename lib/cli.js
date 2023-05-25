const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const shape = require('./shapes.js')
const createFile = require('./svg-file.js')
class CLI {
    constructor () {
        this.logoText = '';
        this.logoColor = '';
        this.logoShape = '';
        this.logoTextColor = '';
    }

    run () {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter text to display on your logo(three characters max)?',
                    validate: (value) => {
                        if (value && (value.length <= 3)) {return true}
                        else { return 'Please enter your logo text.'}
                    }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color do you want your text to be(input color name or hexidecimal)?',
                    validate: (value) => {
                        if (value) {return true}
                        else { return 'Please enter your text color.'}
                    }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape do you want your logo to be?',
                    choices: [
                        'Triangle',
                        "Circle",
                        "Square"
                    ]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color do you want your shape to be(input color name or hexidecimal)?',
                    validate: (value) => {
                        if (value) {return true}
                        else { return 'Please enter your text color.'}
                    }
                }
            ])
            .then (({ text, textColor, shape, shapeColor }) => {
                this.logoText = text;
                this.logoTextColor = textColor;
                this.logoShape = shape;
                this.logoColor = shapeColor;
                return fs.writeFile(join(__dirname,'output',`logo_${this.logoText}.svg`), createFile(this.logoText, this.logoTextColor, this.logoShape, this.logoColor));
            })
            .then (() => console.log('Created logo.svg'))
    }
}

module.exports = CLI;