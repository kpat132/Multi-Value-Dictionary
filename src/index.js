const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const dictionary = new Map();

console.log('Welcome to the Dictionary app. \nPlease choose a command (Or I for options):');

let cli = function () {

    readlineInterface.question('> ', userInput => {
        userInput = userInput.split(" ");

        switch (userInput[0].toUpperCase()) {

            case 'KEYS':
                break;

            case 'MEMBERS':
                break;

            case 'ADD':
                break;

            case 'REMOVE':
                break;

            case 'REMOVEALL':
                break;

            case 'CLEAR':
                break;

            case 'KEYEXISTS':
                break;

            case 'MEMBEREXISTS':
                break;

            case 'ALLMEMBERS':
                break;

            case 'ITEMS':
                break;
            case 'I':
                console.log('KEYS, MEMBERS, ADD, REMOVE, REMOVEALL, CLEAR, KEYEXISTS, MEMBEREXISTS, ALLMEMBERS, ITEMS, EXIT', 'I')
                break;
                default: 
                    console.log('Invalid Command');


        }
    })
}

cli();

module.exports = {
    cli
}