const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');


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

// function writeToFile(fileName, { Triangle, Circle, Square }) {
//     fs.writeFile(fileName, { Triangle, Circle, Square }, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// }


function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            let shape;
            switch (response.shape) {
                case 'Circle':
                    shape = new Circle(response.shapeColor, response.textColor, response.text)
                    break;



                case 'Square':
                    shape = new Square(response.shapeColor, response.textColor, response.text)
                    break;




                case 'Triangle':
                    shape = new Triangle(response.shapeColor, response.textColor, response.text)
                    break;
            }

            fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))




        });



}
init();