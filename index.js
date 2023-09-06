// imports
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes')

// gather data from user before creating the shape
async function promptUser() {
    const shapeTypePrompt = {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape from these options:',
        choices: ['Circle', 'Square', 'Triangle']
    };

    const shapeColorPrompt = {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose your shape color (keyword or hexadecimal):'
    };

    const textColorPrompt = {
        type: 'input',
        name: 'textColor',
        message: 'Choose your text color (keyword or hexadecimal):'
    };

    const textContentPrompt = {
        type: 'input',
        name: 'textContent',
        message: 'Enter up to three letters for your logo:'
    };

    const answers = await inquirer.prompt([
        shapeTypePrompt,
        shapeColorPrompt,
        textColorPrompt,
        textContentPrompt
    ]);

// declaring a shape exists, will define it below
    let shape;
// generate a shape based on what shape the user chose so we can set the shapeData property
    switch (answers.shapeType) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }

// set the color and text properties based on user input
    shape.setColor(answers.shapeColor);
    shape.setTextProperties(answers.textColor, answers.textContent);

    const renderedShape = shape.render();
    console.log('svg code:', renderedShape); // display the rendered shape data

    // create the logo file
    fs.writeFile("logo.svg", renderedShape, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
    });
}

promptUser();