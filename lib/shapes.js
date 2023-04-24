//parent class
class Shapes {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}
//next three are children of the parent class: Shapes
class Triangle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;
    }
    render() {

        //rendering the dimensions, color, text and color text of the Triangle
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
    //rendering the dimensions, color, text and color text of the Circle
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
    //rendering the dimensions, color, text and color text of the Triangle
    render() {

        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="150" height="150" fill = "${this.shapeColor}"/>
        <text x="95" y="95" fill="${this.textColor}" font-size="24" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
      </svg>`;
    }
}



module.exports = { Shapes: Shapes, Triangle: Triangle, Circle: Circle, Square: Square };