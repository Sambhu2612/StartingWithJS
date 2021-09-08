console.log("MERGED CLASS 1 ES6");

var arr = [1,2,3,4];
console.log(arr[2]);

var [one, two, three, four, five] = arr; //ES6 Destructuring
three = 5
console.log(three+" "+arr[2]); // its not changing the actual value in the array so its favaurable to work upon the copy 
console.log(five); // undefined because variable declared but nothing assigned

// ES6 Destructuring application
function getScores(){
    return [90,100];
}

const [x,y,z] = getScores(); // Here x y z are individual variables

console.log(x);
console.log(y);
console.log(z);

//x = 10;   // error cannot change a const variable

// Object Destructuring

const obj = {
    name: "Piyush Mitra",
    email: "abc@email.com",
    age: 20
}

console.log(obj.email);
let {dum, age, email, name1} = obj; // It identifies the keys and it will assign those key values to the variable other variable name will not match to the keys and it will not assign the value
console.log(name1);
console.log(age);
console.log(dum);

let person = {
    firstname: "Piyush",
    lastname: "Mitra",
    age1:20
}

let {middlename="No middle name", age1, lastname, firstname} = person;
console.log(middlename);
console.log(firstname);
console.log(lastname);
console.log(age1);

