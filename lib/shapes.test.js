
const Shapes = require('../lib/shapes.js');

//jest testing for changing the color of a triangle
describe('Shapes', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shapes class', () => {
            const shapes = new Shapes();
            expect(shapes).toBeInstanceOf(Shapes);
        });
    });



    //jest testing for changing the color of a circle
    // describe('Initialize shapeColor', () => {

    //     it('should change the text color', () => {
    //         const shapeColor = 'blue';
    //         const shapes = new Shapes(shapeColor);
    //         expect(shape.shapeColor).toBe(shapeColor);
    //     });
    // });
});

    //jest testing for changing the text content
