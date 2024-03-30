const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Enter project title:'
    },
    {
        name: 'description',
        message: 'Enter project description:'
    },
    {
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        name: 'contribution',
        message: 'Enter contribution guidelines:'
    },
    {
        name: 'test',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache', 'GPL', 'Mozilla', 'BSD 3']
    },
    {
        name: 'github',
        message: 'Enter your Github username:'
    },
    {
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
