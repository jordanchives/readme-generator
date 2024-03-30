// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./utils/generateMarkdown");

// Array of questions to prompt the user
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

// Function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README.md file created');
    })
}

// Function to initialize the application
function init() {
    // Prompt the user with the questions array
    inquirer.prompt(questions)
    .then((answers) => { // Handle user answers
        // Generate README content using user answers
        const readme = generator(answers);
        // Write README content to file
        writeToFile('README.md', readme);
    })
}

// Call the init function to start the application
init();
