const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./utils/generateMarkdown");
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README.md file created');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readme = generator(answers);
        writeToFile('README.md', readme);
    })
}

// Function call to initialize app
init();
