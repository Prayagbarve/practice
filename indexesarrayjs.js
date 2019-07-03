// invalid syntax of indexes of array

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];   
console.log(x);


//  Valid syntax of indexes of array

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;     // person.length will return 3
var y = person[0];   
console.log(x);
console.log(y);
console.log(Array.isArray(person)); // for recognization of an array