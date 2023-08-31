// import the shapes from shapes.js
const { Circle, Square, Triangle } = require('./shapes.js')

// circle test
describe("Testing circle shape", () => {
    test("testing a teal circle", () => {
        const shape = new Circle();
        shape.setColor("#208a8a");
        shape.setTextProperties("white", "XYZ")

        const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="175" cy="100" r="100" fill="#208a8a" /><text x="175" y="100" text-anchor="middle" dy=".3em" fill="white" font-size="70" font-family="Arial" font-weight="600">XYZ</text></svg>`;
        const renderedSVG = shape.render();
        
        // removing whitespace/linebreaks which were causing the test to fail even when it was technically correct
        const normalizedExpectedSVG = expectedSVG.replace(/\s+/g, '');
        const normalizedRenderedSVG = renderedSVG.replace(/\s+/g, '');
        
        expect(normalizedRenderedSVG).toEqual(normalizedExpectedSVG);
    })
});


// square test
describe("Testing square shape", () => {
    test("testing a red square", () => {
        const shape = new Square();
        shape.setColor("red");
        shape.setTextProperties("white", "ABC");

        const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="red" /><text x="150" y="100" text-anchor="middle" dy=".3em" fill="white" font-size="80" font-family="Arial" font-weight="600">ABC</text></svg>`;
        const renderedSVG = shape.render();

        expect(renderedSVG.replace(/\s+/g, '')).toEqual(expectedSVG.replace(/\s+/g, ''));
    })
});

// triangle test
describe("Testing triangle shape", () => {
    test("testing a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setTextProperties("white", "DEF");

        const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="127.33333333333333" text-anchor="middle" dy=".3em" fill="white" font-size="45" font-family="Arial" font-weight="600">DEF</text></svg>`;
        const renderedSVG = shape.render();

        expect(renderedSVG.replace(/\s+/g, '')).toEqual(expectedSVG.replace(/\s+/g, ''));
    })
});