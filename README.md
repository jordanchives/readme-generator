# Static Site Generator

## Description

The Static Site Generator is a Node.js application that generates static websites based on user-provided input. It prompts the user with questions to gather information about the project and then generates a README.md file with the provided data.

## Table of Contents

- [Files](#files)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Files

- `index.js`: Main JavaScript file containing the application logic.
- `package.json`: Configuration file with project metadata and dependencies.
- `.gitignore`: File specifying which files and directories to ignore in version control.
- `utils/generateMarkdown.js`: Module containing functions to generate Markdown content for the README file.

## Dependencies

- `inquirer`: A Node.js library for prompting user input.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/jordanchives/readme-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd readme-generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Open a terminal and navigate to the project directory.

2. Run the following command:
    ```
    node index.js
    ```
3. Answer the prompted questions to provide information about your project.

4. Once all questions are answered, a README.md file will be generated in the `output` directory.

## Preview

A video preview of the application can be found [here](https://jordanchives.github.io/readme-generator/)

---

This project is developed by Jordan.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)