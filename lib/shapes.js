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
    let finishedShape = '';
    switch (this.shape) {
        case 'Circle':
            break;

        case 'Square':
            finishedShape = `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.textColor}${this.text}${this.textColor}" stroke-width="5" />`
            break;

        case 'Triangle':
            break;
    }
}
return `${finishedShape}`