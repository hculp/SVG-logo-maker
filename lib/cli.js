const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

class CLI {
    constructor () {
        this.logoName = '';
        this.logoColor = '';
        this.logoShape = '';
    }

    run () {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter you logo name(three characters max)?',
                    validate: (value) => {
                        if (value) {return true}
                        else { return 'Please enter your logo text.'}
                    }
                }
            ])
            .then (({ name }) => {
                this.logoName = `${name}`;
                return this.nameFile();
            })
            .then (() => console.log('Created logo.svg'))
    }

    nameFile() {
        fs.writeFile
    }
}
module.exports = CLI;