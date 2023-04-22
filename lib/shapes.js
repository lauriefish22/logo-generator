class Shapes {
    constructor(text, shape, textColor, shapeColor) {
        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
}

class Circle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
}

class Square extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
}

render() {

}