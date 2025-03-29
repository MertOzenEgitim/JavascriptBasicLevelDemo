//Belge Yapısına Erişim
//document

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// document.body.innerHTML="<h1>Merhaba</h1>";

//window
// console.log(window);
// console.log(document);
// console.log(window.document);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// window.alert("Merhaba");
// console.log(window.location.href);

// Element Seçimi-Tag
// let h1=document.getElementsByTagName("h1");
// console.log(h1);
// console.log(h1[0]);
// console.log(h1[0].innerText);

// Element Seçimi-Id
// let h2=document.getElementById("title");
// console.log(h2);
// console.log(h2.innerText);
// console.log(h2.innerHTML);

// Element Seçimi-Class
// let country=document.getElementsByClassName("country");
// console.log(country);
// console.log(country[0]);

// Element Seçimi-QuerySelector
// let htmlElement=document.querySelector("h2");
// console.log(htmlElement);
// htmlElement=document.querySelector("#title");
// console.log(htmlElement);
// htmlElement=document.querySelector("p");
// console.log(htmlElement);
// htmlElement=document.querySelector(".content");
// console.log(htmlElement);
// htmlElement=document.querySelectorAll(".content");
// console.log(htmlElement);

// htmlElement.forEach(element => {
//     console.log(element.innerText);
// });

//Element Ekleme, Silme ve Güncelleme
// let newP=document.createElement("p");
// newP.innerText="Bu yeni eklenen bir paragraftır!";
// document.body.appendChild(newP);
// console.log(newP.innerText);
// newP.innerText="Güncellendi";
// console.log(newP.innerText);
// newP.innerHTML="<span>Deneme</span>";
// console.log(newP.innerHTML);
// console.log(newP.innerText);

// newP.remove();

//Event Listener'lar ile Etkileşim
// document.getElementsByTagName("button")[0];
let button=document.querySelector("button");

// button.addEventListener("click",function(){

//     document.getElementsByTagName("h1")[0].innerText="Merhaba İstanbul!";

// });

button.addEventListener("click",buttonClick);

button.addEventListener("mouseover",function(){

    document.getElementsByTagName("h1")[0].innerText="Merhaba Türkiye!";
    this.removeEventListener("click",buttonClick);
});

function buttonClick(){
    document.getElementsByTagName("h1")[0].innerText="Merhaba İstanbul!";
}