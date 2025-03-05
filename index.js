//Koşul İfadeleri
//if,else if,else
//let sayi=0;
//let sayi=10;
//let sayi=-10;
// if(sayi>0){
//     console.log("Sayı pozitiftir.");
// }else if(sayi<0){
//     console.log("Sayı negatiftir.");
// }else{
//     console.log("Sayı sıfırdır.");
// }

//switch-case
// let day=3;
// switch(day){
//     case 0:
//         console.log("Pazar");
//         break;
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");   
//         break; 
//     default:
//         console.log("Geçersiz gün");
// }

//Döngüler
//for
// for(let i=1;i<=5;i++){
//     console.log("Adım:"+i);
// }
// for(let i=1;i<=5;i+=2){
//     console.log("Adım:"+i);
// }
// for(let i=1;i<5;i+=2){
//     console.log("Adım:"+i);
// }

//while
// let sayac=0;
// while(sayac<5){
//     // sayac++;   
//     console.log("Sayac:"+sayac); 
//     sayac++;   
// }

//do..while
// let x=0;
// do{
//     console.log("Value:"+x);
//     x++;
// }while(x<5);

//break
// for(let i=0;i<10;i++){
//     if(i==5){        
//         break;
//     }
//     console.log(i);
// }

//continue
// for(let i=0;i<10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }
// for(let i=0;i<10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }    
// }

//for..in
// let person={firstName:"Mert",age:30};
// for(let prop in person){
//     console.log(prop+": "+person[prop]);
// }


//for..of
// let names=["Mert","Mehmet","Mesut"];
// for(let nameItem of names){
//     console.log(nameItem);
// }

//scope
// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
for(let i=0;i<3;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}