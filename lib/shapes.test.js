const { Shapes, Square, Triangle, Circle } = require("./shapes.js");

//jest testing to verify the Shapes class can be instantiated
describe('Shapes', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shapes class', () => {
            const shapes = new Shapes();
            expect(shapes).toBeInstanceOf(Shapes);
        });
    });

    //jest testing to verify the color can be changed
    describe('Initialize shapeColor', () => {

        it('should change the shape color', () => {
            const shapeColor = 'blue';
            const shapes = new Shapes(shapeColor);
            expect(shapes.shapeColor).toBe(shapeColor);
        });
    });
    //jest testing to verify the text color can be changed
    describe('Initialize textColor', () => {

        it('should change the text color', () => {
            const textColor = 'green';
            const shapes = new Shapes(textColor);
            expect(shapes.shapeColor).toEqual(textColor);
        });
    });
});

