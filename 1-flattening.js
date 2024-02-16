let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

console.log(arrays.reduce((accumulator, array) => accumulator.concat(array), []))
// → [1, 2, 3, 4, 5, 6]


//use this if this doesnt work 

// loop(3, n => n > 0, n => n - 1, console.log);
// let newArray = arrayObject.flat([depth]);


// const numbers = [1, 2,[3, 4, 5,]]
// const flatNumbers = numbers.flat(Infinity )
// console.log(flatNumbers);