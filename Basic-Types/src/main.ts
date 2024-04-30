console.log("Hello World!");

let a: number = 4;

let naam: string = "Kunal Kumar";

// just simple like this we can use the basic types in typescript

const num: string[] = ["Kunal", "Kumar", "Singh"];

num.push("Kunal");

// num.push(1);
// this will give error because we have defined the array as string

const c: [1, 2, 3, 4] = [1, 2, 3, 4];
//  c.push(5);
// this will give error because we have defined the array as fixed length array

const b: number[] = [1, 2, 3, 4, 5];
const date: Date[] = [new Date(), new Date()];

// Any type :-
let randomValue: any = 10;
randomValue = true;
randomValue = "Kunal";

// unknown type :-
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = "Kunal";
// unknown type is similar to any type but it is not allow to assign any value to it directly like any type

// randomValue2 = 10;
// this will give error because we have defined the type as unknown and we can not assign any value to it directly

const person1 = {
  name: "Kunal",
  age: 21,
};

// person.isProgrammer = true;
// this will give error because we have not defined the property in the object

// Solution :- we can define the property as optional by adding ? after the property name like this isProgrammer?: boolean in the object type definition 

const person: { name: string; age: number; isProgrammaer?: boolean } = {
  name: "Kunal",
  age: 21,
};
