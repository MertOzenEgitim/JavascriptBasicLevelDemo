//---window object
// console.log(window);
// alert("Merhaba!");
// console.log(prompt("Adınızı girin:"));
// console.log(confirm("Silmek istediğinize emin misiniz?"));

//---navigator object
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.onLine);

//---location object
// console.log(location.href);
// location.href="https://www.google.com";
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.search);
// const params=new URLSearchParams(location.search);
// console.log(params.get("id"));
// console.log(params.get("kategori"));
// console.log(location.hash);
// location.reload();

function gotourl(){
     location.assign("https://www.google.com");
    // location.replace("https://www.google.com");
}


//---history object
function back(){
    // history.back();
    history.go(-1);
}
function forward(){
    // history.forward();    
    history.go(1);
}
console.log(history.length);

//---screen object
console.log(screen.width);
console.log(screen.height);
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

console.log(window.innerHeight);
console.log(window.innerWidth);
