const testing = require('../lib/shapes.js');



describe('Triangle', () => {
    describe('render', () => {
        it('should turn to desired color', () => {
            let color = "blue";
            let triangle = new Triangle(color);
            let result = `<polygon points="100,50 50,150 150,150" fill="${color}" />`;
            expect(triangle.render()).toEqual(result);

        })
    })
})



describe('Circle', () => {
    describe('render', () => {
        it('should turn to desired color', () => {
            let color = 'purple';
            let circle = new Circle(color);
            let result = `<circle cx="100" cy="100" r="50" fill="${color}" />`;
            expect(circle.render()).toEqual(result);
        })
    })
})

describe('Square', () => {
    describe('render', () => {
        it('should replace the text', () => {
            let newText = "dog";
            let square = new Square(newText);
            let result = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="150" height="150" fill = "${this.shapeColor}"/>
            <text x="100" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${newText}</text>
          </svg>`;
            expect(square.render()).toEqual(result);
        })
    })
})