import { default as inquirer } from "inquirer";


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 letters for your text.',
        validate: (response) => {
            if (response === '') {
                return '3 letters are required'
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'What shape would you like?.',
        validate: (response) => {
            if (response === '') {
                return 'Shape is required'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color of the text using color name or hexadecimal number .',
        validate: (response) => {
            if (response === '') {
                return 'You must choose text color.'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape.',
        validate: (response) => {
            if (response === '') {
                return 'You must choose the shape color.'
            }
            return true;
        }
    }

]
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);

        })
}