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
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5" />`
    }
}


class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5" />`
    }
}


class Square extends Shapes {

    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5" />`
    }
}



module.exports = { Shapes: Shapes, Triangle: Triangle, Circle: Circle, Square: Square };