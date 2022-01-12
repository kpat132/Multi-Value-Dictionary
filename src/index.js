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
               add(userInput,key);
                break;

            case 'REMOVE':
                remove(userInput,key);
                break;

            case 'REMOVEALL':
                removeAll(userInput,key);
                break;

            case 'CLEAR':
                dictionary.clear();
                console.log('Cleared');
                break;

            case 'KEYEXISTS':
                keyExists(userInput,key);
                break;

            case 'MEMBEREXISTS':
                memberExists(userInput,key);
                break;

            case 'ALLMEMBERS':
                allMembers(userInput);
                break;

            case 'ITEMS':
                items(userInput);
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

function add(userInput,key){
    memberArray = dictionary.get(key);
    if (userInput.length !== 3) {
        console.log('ERROR: Input must include command, and one key-member pair');
    }

    if (!dictionary.has(key)) {
        dictionary.set(key, [userInput[2]]);
        console.log('Added');
    }
    else {
        if (memberArray.indexOf(userInput[2]) === -1) {
            memberArray.push(userInput[2]);
            dictionary.set(key, memberArray);
            console.log('Added');
        }
        else {
            console.log('ERROR, member already exists for key');
        }
    }
}

function remove(userInput,key){
    memberArray = dictionary.get(key);
    index = memberArray.indexOf(userInput[2]);

    if (dictionary.has(key)) {
        if (userInput.length !== 3) {
            console.log('ERROR: Input must include command and one key-member pair.');
        } else if (index === -1) {
            console.log('ERROR: Member does not exist.');
        } else {
            memberArray.splice(index, 1);
            dictionary.set(key, memberArray);
            console.log('Removed.');
        }

        if (dictionary.get(key).length === 0) {
            console.log('Remove entire entry.');
            dictionary.delete(key);
        }
    } else {
        console.log('ERROR, key does not exist');
    }
}

function removeAll(userInput,key){
    if (userInput.length !== 2) {
        console.log("ERROR: Input must include command and one key.");
    }
    if (!dictionary.has(key)) {
        console.log('ERROR, key does not exist.');
    } else {
        dictionary.delete(key)
        console.log('Removed.');
    }
}

function keyExists(userInput,key){
    if (userInput.length !== 2) {
        console.log("ERROR: Input must include command and one key.");
    }
    console.log(`${dictionary.has(key)}`);
}

function memberExists(userInput,key){
    memberArray = dictionary.get(key);
    if (userInput.length !== 3) {
        console.log("ERROR: Input must include command and one member.");
    } else if (!memberArray) {
        console.log("Key/Member pair does not exist")
    } else {
        index = memberArray.indexOf(userInput[2])

        if (index >= 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

function allMembers(userInput){
    let allMembers = [];
    if (userInput.length !== 1) {
        console.log("ERROR: Input must only include command");
    } else if (dictionary.size === 0) {
        console.log("(Empty Set)")
    } else {
        for (let values of dictionary.values()) {
            allMembers = allMembers.concat(values);
        }
        for (let i = 0; i < allMembers.length; i++) {
            console.log(`${i + 1}) ` + allMembers[i]);
        }
    }
}

function items(userInput){
    count = 1;
    if (userInput.length !== 1) {
        console.log("ERROR: Input must only include command")
    } else if (dictionary.size === 0) {
        console.log("(Empty Set)")
    } else {

        for (let [key, value] of dictionary.entries()) {
            value.forEach(element => {
                console.log(`${count}) ${key} : ${element}`)
                count++;
            });

        }
    }
}


module.exports = {
    cli,
    keys,
    members,
    add,
    remove,
    removeAll,
    keyExists,
    memberExists,
    allMembers,
    items
}