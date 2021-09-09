// ES6-Array-Method

// map in array
// map and foreach both can take functions as arguments but map returns a new array where as foreach doesn't

let rank = [1,2,3,4,5,6];
const newArr = rank.map((e) => e + 1); // In place of map use foreach it will give you undefined
console.log(newArr);


// in map like foreach the first argument of the function formal parameters is passed the element and the second argument is passed with the index

rank.map((e, i) => {
    console.log(`${e} at index ${i}`);
});

// Application of mapping

console.log(rank.map((e, i) => {
    if(e%2===0)
        return e;
}));

// Filter,  it is a method which maps each element of an array and returns an array of those elements which obey the provided condition in the function parameter

console.log(rank.filter((e, i) => {
    if(e%2===0)
        return e;
})); // Prints only the defined elements 


