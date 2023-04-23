class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {

        return `<svg width = "300" height = "200" version = "1.1" xmlns = "http://www.w3.org/2000/svg">${this.shapeColor}<polygon points="100,50 50,150 150,150" /></svg `;
    }
}


class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)

    }
    render() {
        return `<svg width="300" height="200" version="1.1" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="${this.shapeColor}" /></svg>`;


    }
}


class Square extends Shapes {

    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {

        return `< rect x = "10" y = "10" width = "30" height = "30" fill = "${this.shapeColor}" stroke - width="5" /> `
    }
}



module.exports = { Shapes: Shapes, Triangle: Triangle, Circle: Circle, Square: Square };