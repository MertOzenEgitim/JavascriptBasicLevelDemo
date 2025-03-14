//Nesneler

// let person={
//     name:"Mert",
//     age:30,
//     greet:function(){
//         return "Merhaba, "+this.name
//     }
// };
// console.log(person.name);
// console.log(person["age"]);
// console.log(person.greet());

//Diziler
// let numbers=[1,2,3,4,5];
// let names=["Mert","Mehmet","Mesut"];

// console.log(numbers);
// console.log(names);

// numbers.push(6);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// console.log(numbers[0]);

//Diziler-Döngülerle Erişim
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// numbers.forEach(num=>console.log(num));

// let doubled=numbers.map(num=>num*2);
// console.log(doubled);
// numbers.map(num=>console.log(num));
// numbers=numbers.map(num=>num*2);
// console.log(numbers);

// //Dizi+Obje
// let people=[
//     {
//         name:"Mert",
//         age:30,
//         greet:function(){
//             return "Merhaba, "+this.name
//         }
//     },   
//     {
//         name:"Mehmet",
//         age:28,
//         greet:function(){
//              return "Merhaba, "+this.name
//         }
//     },
//     {
//         name:"Mesut",
//         age:26,
//         greet:function(){
//              return "Merhaba, "+this.name
//         }
//     }  
// ]

// people.forEach(person=>{
//     console.log(person.greet(),person.age);
// });  

//this keyword + arrow function scope

let person={
    name:"Mert",
    age:30,
    greet:()=>{
        return "Merhaba, "+this.name
    }
};

console.log(person.greet());