const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { createFileContent } = require('./svg-make.js');

const hexRegEx = /^#([0-9a-f]{3}){1,2}$/gim;

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
            .then(({ text, textColor, shape, shapeColor }) => {
                this.logoText = text;
                this.logoTextColor = textColor;
                this.logoShape = shape;
                this.logoColor = shapeColor;
                let data = createFileContent(this.logoText, this.logoTextColor, this.logoShape, this.logoColor);
                return fs.writeFile(
                    join(__dirname,'..', 'output',`logo_${this.logoText}.svg`), 
                    data,
                    (error) => { error ? console.log(error): console.log('Created logo.svg')}
                );
            })
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.');
            });
    }
}

module.exports = CLI;