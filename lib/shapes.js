class Shapes {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;
    }
    render() {


        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 50,150 150,150" fill="${this.shapeColor}" /><text x="100" y="105" fill="${this.textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
}

class Circle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor);
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="50" fill="${this.shapeColor}" />
          <text x="100" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
}




class Square extends Shapes {

    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;
    }
    render() {

        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="150" height="150" fill = "${this.shapeColor}"/>
        <text x="100" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
      </svg>`;
    }
}



module.exports = { Shapes: Shapes, Triangle: Triangle, Circle: Circle, Square: Square };