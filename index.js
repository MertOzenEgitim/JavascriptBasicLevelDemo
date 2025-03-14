//sayHello();
//Function Declaration
// function sayHello(){
//     console.log("Merhaba");
// }

//sayHello();

//sayHello3();

//Function Expression
// const sayHello2=function(){
//     console.log("Merhaba");
// };
// var sayHello3=function(){
//     console.log("Merhaba");
// };

//sayHello2();


//hoisting
// console.log(x);
// console.log(y);
// var x="x";
// let y="y";

//IIFE
// (function(){

//     let firstName="Mert";
//     console.log(firstName);

// })();

//Fonksiyonlarda Parametreler ve Geri Dönüş Değerleri
// function sum(num1,num2){
//     console.log(num1+num2);
// }

//sum(2,3);

// (function(num1,num2){
//     console.log(num1+num2);
// })(2,5);

//->arguments

// function multiply(){
//     console.log(arguments[0]*arguments[1]);
// }

//multiply(8,9);

// function getFullName(){
//     console.log(arguments[0]+" "+arguments[1]);
// }

// getFullName("mert","özen");

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName);
// }

// getFullName("mert","özen");

//->Varsayılan Parametreler
// function getGreet(fullName="Ziyaretçi"){
//     console.log("Merhaba,"+fullName);
// }

// getGreet();
// getGreet("Mert Özen");

//->Geri Dönüş Değeri Olan Fonksiyonlar
// function subtract(num1,num2){
//     return num1-num2;
// }

// console.log("Sonuç:",subtract(2,1));

//->rest operator
// function sum(...numbers){
//     let totalValue=0;
//     for(number of numbers){
//         totalValue+=number;
//     }
//     return totalValue;
// }

// console.log(sum(3,98,74,5,2));

//->spread operator
// function sum(num1,num2,num3){    
//     return num1+num2+num3;
// }
// const numbers=[3,5,7];
// console.log(sum(...numbers));

//OK(Arrow) Fonkisyonları (ES6)
// const sayHello=()=>{
//     console.log("Merhaba");
// };

// sayHello();

// const sayHello=(fullName="Ziyaretçi")=>{
//     console.log("Merhaba,"+fullName);
// };

// sayHello("Mert");
// sayHello();

// const sum=(num1,num2)=>{
//     return num1+num2;
// };

// const sum=(num1,num2)=>num1+num2;

// console.log(sum(3,4));

//Callback Function

// function process(a,b,callback){
//     //islemler
//     return callback(a,b);
// }

// const toplam=process(3,5,(x,y)=>x+y);
// const toplam=process(3,5,function(x,y){
//     return x+y;
// });
// console.log(toplam);

function getUserInfo(userId,callback){
    console.log("Kullanıcı bilgileri alınıyor");

    setTimeout(() => {
        const user={
            id:userId,
            name:"mert",
            yas:30
        };

        callback(user);
    }, 1000);
}


function writeUserInfo(user){
    console.log("Id:"+user.id);
    console.log("Ad:"+user.name);
    console.log("Yaş:"+user.yas);
}

getUserInfo(1,writeUserInfo);