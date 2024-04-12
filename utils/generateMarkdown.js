// Description: This file contains the generateMarkdown function that will generate the README file based on the user's input.

// Function to render license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MPL 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'BSD 3':
      return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to render license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL v3':
      return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MPL 2.0':
      return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
    case 'BSD 3':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to render license section
function renderLicenseSection(license) {
  return `This project is covered under the ${renderLicenseLink(license)} license.
  
  ${renderLicenseBadge(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.test}

## Questions

For questions, contact me:
- [Github](https://github.com/${data.github})
- [Email](mailto:${data.email})

## License
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
