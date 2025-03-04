// var number=10;
// //var number=40;
// {
// let score=20;
// }
// let score=20;
// const PI=3.14;

// score=30;

// //PI=2.23;

// console.log(number);
// console.log(score);
// //console.log(number2);

// function getName(){
//     let firstName="mert";
//     return firstName;
// }

// let firstName="mehmet";

// console.log(getName());
// console.log(firstName);


//---İlkel Veri Tipleri
//1-String
let message="Merhaba";
let message2='Merhaba2';
console.log(message);
console.log(message2);

//2-Number
let age=30;
let price=19.99;
let negative=-10;

console.log(age);
console.log(price);
console.log(negative);

//3-Boolean
let isHungry=false;
isHungry=true;
console.log(isHungry);

//4-Null
let emptyValue=null;
console.log(emptyValue);

//5-Undefined
let uninitialized;
console.log(uninitialized);

//6-Symbol
const ID=Symbol("id");
const user={
    name:"Mert",
    [ID]:1234
}

//7-BigInt
console.log(Number.MAX_SAFE_INTEGER);
let bigNumber=9007199254740991n;
let bigNumber2=BigInt(9007199254740991);
console.log(bigNumber);
console.log(bigNumber2);

//NOT: NaN: Not a Number
console.log(0/0);
console.log(2*"m");

//Truthy ve Falsy
//--Falsy
//false
//0
//""
//null
//undefined
//NaN
let value1=0;
let value2="";
let value3=null;

//if(value1){
//if(value2){
if(value3){
    console.log("value1 truthy");
}else{
    console.log("value1 falsy");
}

//--Truthy
//true
//1,-1,100 gibi sayılar
//"hello"
//[]
//{}
//function(){}

let value4="Merhaba";
let value5=[];
let value6=function(){};

//if(value4){
//if(value5){
if(value6){
    console.log("value1 truthy");
}else{
    console.log("value1 falsy");
}

//-Operatörler
//--Aritmetik Operatörler
console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);
console.log(5%3);
console.log(5**3);

//--Karşılaştırma Operatörleri
console.log(5=="5"); //true
console.log(5==="5"); //false
console.log(5!=3); //true
console.log(5!==5); //false
console.log(5!=="5"); //true
console.log(5>3); //true
console.log(5<3); //false
console.log(5>=5); //true
console.log(5<=5); //true

//--Mantıksal Operatörler
//&& (ve) - iki şart gerçekleşmeli
//|| (veya) - iki şarttan biri gerçekleşse yeterli
//! (değili) - şartın tersi benim için kabul
let firstName="mert";
let lastName="özen";
let isAdmin=false;

if(firstName=="mert" && lastName=="özen"){
    console.log("giriş başarılı");
}
if(firstName=="mert" || firstName=="mehmet" || firstName=="mesut"){
    console.log("giriş başarılı");
}

if(!isAdmin){
    console.log("admin değil");
}

//--Atama Operatörleri
//= -> değer atama
//+= -> toplayarak atama
//-= -> çıkararak atama
//*= ->çarparak atama
// /= -> bölerek atama

let customerAge=30;
customerAge=customerAge+3;
console.log(customerAge);
customerAge+=3;
console.log(customerAge);

