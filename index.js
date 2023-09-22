const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo');

const questions = [
    //Questions that determine shape, color, and characters
    {
        type:'list',
        name:'shapes',
        message:'The SVG logo should be what shape?',
        choices: [
            'triangle',
            'square',
            'circle'
        ]
    },
    {
        type:'input',
        name:'shape_color',
        message:'What color should the SVG logo shape be?',
    },
    {
        type:'input',
        name:'text',
        message:'The SVG logo should contain what three characters?',
    },
    {
        type:'input',
        name:'text_color',
        message:'What colors should the SVG  logo characters be?'
    }
];
    
//Function to generate logo after all prompts
function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(err) {
        if (err) {
            console.log('Error! Logo not generated');
        } else {
            console.log('Logo was generated successfully as logo.svg');
        }
    });
}

//Function to init app
function init() {
    inquirer.prompt(questions).then(function(data){
        var fileName = 'logo.svg';
        writeToFile(fileName, data)
    });
}

//Function call to init app
init();