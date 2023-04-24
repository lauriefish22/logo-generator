const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

//User questions using Inquirer
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



//function to start questions and also print
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            let shape;
            //changing colors and text to match user's input
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
            //function to create the svg image
            fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))



        });

}
init();