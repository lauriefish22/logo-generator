describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(BlogPost);
        }):
    }):




    describe('Initialize shapeColor', () => {
        it('should set the shapeColor', () => {
            const shapeColor = 'purple';
            const shape = new Shapes(shapeColor);

            expect(shape.shapeColor)toBe(shapeColor);
        });
    });
});