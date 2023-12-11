// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = ["What is the title for your project?: ",];
inquirer
    .prompt([
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a detailed description for your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter the installation instructions for your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter the usage information regarding your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidlines for your project?",
        name: "contributing", 
    },
    {
        type: "input",
        message: "Please describe any test instructions.",
        name: "tests",
    },
    {
        type: "list",
        name: 'license',
        message: "What license does your project fall under?",
        choices: ["MIT","UT","none"],
        default: 2,
    },

])
.then((data)=>{
    const fileName = `${data.title.split(' ').join('')}.txt`;
    fs.writeFile(fileName,JSON.stringify(data.title, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Your file has been created and should have a title!')
    );
    
    fs.appendFile(fileName,"\n\n DESCRIPTION: " + JSON.stringify(data.description, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Your file now has a description.")
    );

    fs.appendFile(fileName,"\n\n INSTALLATION: " + JSON.stringify(data.installation, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Your file now has installation instructions.")
    );

    fs.appendFile(fileName,"\n\n USAGE: " + JSON.stringify(data.usage, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Your file now has usage information.")
    );

    fs.appendFile(fileName,"\n\n CONTRIBUTING: " + JSON.stringify(data.contributing, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Your file now has contributing instructions.")
    );

    fs.appendFile(fileName,"\n\n TESTS: " + JSON.stringify(data.tests, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Your file now has testing instructions.")
    );

    fs.appendFile(fileName,"\n\n LICENSE: " + JSON.stringify(data.license, null, '\t') + " licensed.", (err) =>
        err ? console.log(err) : console.log("Your file now has a license displayed.")
    );

});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName,'')
// }

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
