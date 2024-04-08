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
        choices: ['MIT', 'Apache', 'GPL v3', 'MPL 2.0', 'BSD 3', 'None']
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
    const outputDir = './output/';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    fs.writeFile(outputDir + fileName, data, (error) => {
        if (error) {
            console.log(`Error writing to ${fileName}`, error);
            return;
        }
        console.log(`${fileName} file created`);
    })
}

// Function to initialize the application
function init() {
    // Prompt the user with the questions array
    inquirer.prompt(questions)
    .then((answers) => {
        // Generate README content using user answers
        const readme = generator(answers);
        // Write README content to file
        writeToFile('README.md', readme);
    })
}

// Call the init function to start the application
init();
