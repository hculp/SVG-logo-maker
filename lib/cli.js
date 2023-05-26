// Import required packages and functions
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { createFileContent } = require('./svg-make.js');

// Regex expression for evaluating hex code colors
const hexRegEx = /^#([0-9a-f]{3}){1,2}$/gim;

// CLI class creation
class CLI {
    // constructor function for logo values that will then take on user input
    constructor () {
        this.logoText = '';
        this.logoColor = '';
        this.logoShape = '';
        this.logoTextColor = '';
    }

    // Runs inquirer prompt to collect user input
    run () {
        return inquirer
            // User is prompted for input on logo text, text color, shape, and shape color
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
                    message: 'What color do you want your text to be(input color name or proper hexidecimal value like #FFFFFF)?',
                    validate: (value) => {
                        if (value || hexRegEx.test(value)) {return true}
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
                    message: 'What color do you want your shape to be(input color name or proper hexidecimal value like #FFFFFF)?',
                    validate: (value) => {
                        if (value || hexRegEx.test(value)) {return true}
                        else { return 'Please enter your text color.'}
                    }
                }
            ])
            // User input values are then assigned to CLI constructor values
            .then(({ text, textColor, shape, shapeColor }) => {
                this.logoText = text;
                this.logoTextColor = textColor;
                this.logoShape = shape;
                this.logoColor = shapeColor;
                // Those newly input values are then passed to a function(createFileContent) to generate the logo.svg content as a string which is pass to writeFile to then create the file
                let data = createFileContent(this.logoText, this.logoTextColor, this.logoShape, this.logoColor);
                return fs.writeFile(
                    join(__dirname,'..', 'output',`logo.svg`), 
                    data,
                    (error) => { error ? console.log(error): console.log('Generated logo.svg')}
                );
            })
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.');
            });
    }
}

module.exports = CLI;