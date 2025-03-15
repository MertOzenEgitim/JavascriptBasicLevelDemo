const person={
    name:"Mert",
    age:30
}

const jsonString=JSON.stringify(person);
console.log(jsonString);

const jsonObject=JSON.parse(jsonString);
console.log(jsonObject);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data));