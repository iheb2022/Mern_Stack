// Probleme 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const[,,otherOtherRandomCar]=cars
//Predict the output
console.log(randomCar)//Tesla
console.log(otherRandomCar)//Mercedes




// Problem  2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);//Elon 
console.log(employee.employeeName);//error


// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    // password:'12345'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);//12345
console.log(hashedPassword);//undifined




// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;


console.log(first === second);//false   
console.log(first === third);//true
// false because 2 don't equal 5
//true because 2 equal 2



// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;


//Predict the output
console.log(key);//value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5


//value because we called the key 
// the array because we called the secondkey
//1 because we called the first ellement of the array



// Problem 6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3


// Problem 7
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}  
// it don't work because we did not invoke it

// Problem 8
const beatles = ['Paul', 'George', 'John', 'Ringo']; 
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
        const name = names[index]; //because we are not gonna change it
        console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);
// because we invoke the actuallyPrintingnames inside it


// Problem 9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) // because we are comparing two variable and it returns true
console.log(planet === planetCopy)