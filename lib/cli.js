const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What abbreviation would you like to use for your logo(up to three characters)?',
        validate: (value) => {
            if (value) {return true}
            else { return 'Please enter your logo text.'}
        }

    }
]