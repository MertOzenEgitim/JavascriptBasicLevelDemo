let metin="Merhaba, dünya!";

//String İşlemler
//1-length
console.log(metin.length);

//2-indexOf()
console.log(metin.indexOf("dünya"));
console.log(metin[9]);

//3-slice()
console.log(metin.slice(0,7));
console.log(metin.slice(-6));

//4-substring()
console.log(metin.substring(0,4));
console.log(metin.substring(4,0));

//5-replace()
console.log(metin.replace("dünya","JavaScript"));
console.log(metin);

//6-toUpperCase ve toLowerCase()
console.log(metin.toLowerCase());
console.log(metin.toUpperCase());

//7-split()
console.log(metin.split(" "));

//8-concat()
let metin2="Merhaba"
let metin3="Dünya";
console.log(metin2.concat(",",metin3,"!"));

//Template Literals
let firstName="Mert";
let age=30;
console.log(`Merhaba, benim adım ${firstName}, ${age} yaşındayım.`);

//Düzenli İfadeler (RegEx)
//->literal
let regex=/merhaba/;
//->RegExp nesnesi
let regex2=new RegExp("merhaba");

let metin4="Java, Javascript birbirinden farklı dillerdir."
//->g:global arama(tüm eşleşmeleri bulur)
//->i:büyük/küçük harf duyarsız
//->m:çok satırlı arama
let regex3=/java/gi;

//->RegEx Metotları
//1-test()
console.log(regex3.test(metin4));
//2-exec()
console.log(regex3.exec(metin4));
//3-match()
console.log(metin4.match(regex3));
//4-matchAll()
let matchingItems=metin4.matchAll(regex3);
for(let matchItem of matchingItems){
    console.log(matchItem);
}
//5-search()
console.log(metin4.search(regex3));
//6-replace()
console.log(metin4.replace("Java","java"));
console.log(metin4.replace(regex3,"java"));
//7-replaceAll()
console.log(metin4.replaceAll(regex3,"java"));
//8-split()
console.log(metin4.split(/,/));

let email="mertozensoru@gmail.com";
let emailRegex=/([\w\.]+)@([\w\.]+)\.(\w+)/g;

console.log(emailRegex.test(email));