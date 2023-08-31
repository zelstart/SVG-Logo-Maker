// a class for shapes
class Shape {
    constructor(shapeColor, textColor, letters) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.letters = letters;
        this.shapeData = '' // initializing the shapeData property to use in the render function
    }

    // assigning all the properties we're going to need to plug in the svg code
    setColor(color) {
        this.shapeColor = color;
    }

    setTextProperties(textColor, letters) {
        this.textColor = textColor;
        this.letters = letters;
    }

    setShapeData(shapeData) {
        this.shapeData = shapeData;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shapeData}
        <text x="60" y="100" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.letters}</text>
    </svg>`; 
    }
}

// circle shape (inherits from shape)
class Circle extends Shape {
    render() {
        const shapeData = `<circle cx="60" cy="100" r="50" fill="${this.shapeColor}" />`; // data specific to this shape type
        this.setShapeData(shapeData); // setting the shapeData property to correspond with this shape type
        return super.render(); // use the parent classes render method
    }
}

// square shape (inherits from shape)
class Square extends Shape {
    render() {
        const shapeData = `<rect x="170" y="40" width="80" height="80" fill="${this.shapeColor}" />`;
        this.setShapeData(shapeData);
        return super.render(); 
    }
}
// triangle shape (inherits from shape)
class Triangle extends Shape {
    render() {
        const shapeData = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        this.setShapeData(shapeData); 
        return super.render();
    }
}

// export so we can access it elsewhere
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};