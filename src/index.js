const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const dictionary = new Map();
let index = 0;
let memberArray = [];
let count = 1;
console.log('Welcome to the Dictionary app. \nPlease choose a command (Or I for options):');

let cli = function () {

    readlineInterface.question('> ', userInput => {
        userInput = userInput.split(" ");
        let key = userInput[1];

        switch (userInput[0].toUpperCase()) {

            case 'KEYS':
                keys(userInput);
                break;

            case 'MEMBERS':
                members(userInput,key);
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
            case 'EXIT':
                readlineInterface.close();
                return true;
            default:
                console.log('Invalid Command');



        }
        cli();
    })
}

cli();

function keys(userInput){
    count = 1;

    if (dictionary.size === 0) {
        console.log('(empty set)');
    }
    if (userInput.length > 1) {
        console.log("ERROR, Too many input values.");
    } else {
        for (let key of dictionary.keys()) {
            console.log(`${count}) ` + key);
            count++;
        }
    }
}

function members(userInput,key){
    if (userInput.length !== 2) {
        console.log("ERROR: Input must include command and one key.")
    }
    if (dictionary.has(key)) {
        for (const member of dictionary.get(key)) {
            console.log(member);
        }

    } else {
        console.log('ERROR, key does not exist.');
    }
}

module.exports = {
    cli,
    keys,
    members
}