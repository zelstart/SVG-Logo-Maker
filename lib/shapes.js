// a class for shapes
class Shape {
    constructor(shapeColor, textColor, letters) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.letters = letters;
    }

    setColor(color) {
        this.shapeColor = color;
    }

    setTextProperties(textColor, letters) {
        this.textColor = textColor;
        this.letters = letters;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shapeData}
        <text x="60" y="100" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.letters}</text>
    </svg>`; // placeholder
    }
}

// circle shape (inherits from shape)
class Circle extends Shape {
    render() {
        this.shapeData = `<circle cx="60" cy="100" r="50" fill="${this.shapeColor}" />`;
        return this.shapeData;
    }
}

// square shape (inherits from shape)
class Square extends Shape {
    render() {
        this.shapeData = `<rect x="170" y="40" width="80" height="80" fill="${this.shapeColor}" />`;
        return this.shapeData;
    }
}
// triangle shape (inherits from shape)
class Triangle extends Shape {
    render() {
        this.shapeData = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        return this.shapeData;
    }
}

// export so we can access it elsewhere
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};