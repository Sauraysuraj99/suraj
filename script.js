let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num * 2));

// map
let doubled = numbers.map(num => num * 2);

// filter
let evens = numbers.filter(num => num % 2 === 0);

// reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);

// find
let firstEven = numbers.find(num => num % 2 === 0);

// some and every
let hasEven = numbers.some(num => num % 2 === 0);
let allEven = numbers.every(num => num % 2 === 0);