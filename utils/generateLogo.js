const Triangle = require('../lib/triangle')
const Square = require('../lib/Square')
const Circle = require('../lib/Circle')

function generateLogo(data) {
    let shape = undefined
    if (data.shapes === 'Triangle') {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    } else if (data.shapes ==='Square') {
        shape = new Square(data.shape_color, data.text, data.text_color)
    } else if (data.shapes === 'Circle') {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    };
    return shape.render();
}

module.exports = generateLogo;