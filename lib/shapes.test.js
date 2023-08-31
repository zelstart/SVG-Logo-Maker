// import the shapes from shapes.js
const { Circle, Square, Triangle } = require('./shapes.js')

// circle test
describe("Testing circle shape", () => {
    test("testing a teal circle", () => {
        const shape = new Circle();
        shape.setColor("#208a8a");
        expect(shape.render()).toEqual('<circle cx="60" cy="100" r="50" fill="#208a8a" />')
    })
})

// square test
describe("Testing square shape", () => {
    test("testing a red square", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="170" y="40" width="80" height="80" fill="red" />')
    })
})

// triangle test
describe("Testing triangle shape", () => {
    test("testing a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})