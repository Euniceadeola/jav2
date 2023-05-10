let movie = ['java', 'love', 'keeper', 'abejoye', 'trace', 'html','americano','saki' ];
movie  =  new Array ('java', 'love', 'keeper', 'abejoye', 'trace', 'html','americano','saki')

console.log(movie);
for (const value in movie){
    console.log(value)
}
//console.log(movie.length);
console.log(movie.push('hello'), movie);
//console.log(movie);
console.log(movie.splice(8));
console.log(movie);
console.log(movie.sort());


//2. Object
    // create an object that represent a person
let property = { 
        name: 'eunice',
        age:'12',
        hometown:'lafia',
        food:'rice',
        movie: 'keeper'
    };
    //using dot notation to print each proper
console.log(property.name);
console.log(property.age);
console.log(property.hometown);
console.log(property.food);
console.log(property.movie);

console.log(property.name,property.food,property.hometown,property.age,property.movie);

// add a new property to the object
    property.sex = 'female';
    console.log(property);
//console.log(property.push(sex:'female'));


//use delete operator to remove a property from the object
const propToBeDeleted = 'age';
delete property[propToBeDeleted];
console.log(property);

// use loop to print all the properties and their value to the console
for (const value in property){
    console.log(value);
}
