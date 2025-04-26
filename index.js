const now=new Date();
console.log(now);

const specificDate=new Date(2025,3,28);
console.log(specificDate);

const fromStringDate=new Date('2025-04-27T15:00:00');
console.log(fromStringDate);

//Temel Metotlar
const today=new Date();
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getTime());
console.log(today.getFullYear());

fromStringDate.setHours(17);
console.log(fromStringDate);
fromStringDate.setHours(17,55,10);
console.log(fromStringDate);
fromStringDate.setMinutes(45);
fromStringDate.setSeconds(50);
fromStringDate.setMilliseconds(40);
console.log(fromStringDate);

fromStringDate.setDate(15);
console.log(fromStringDate);
fromStringDate.setMonth(0);
console.log(fromStringDate);
fromStringDate.setFullYear(2030);
console.log(fromStringDate);

function formatDate(date){
    const day=date.getDate().toString().padStart(2,'0');
    const month=(date.getMonth()+1).toString().padStart(2,'0');
    const year=date.getFullYear();

    return `${day}.${month}.${year}`;
}

console.log(formatDate(today));

console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());