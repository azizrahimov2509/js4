/* 10-masala 
Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1*/


let firtsSide = 16;
let secondSide = 12;

function thirdSide(a,b){
 let longSide = (a+b)-1;
 return longSide;
}  
console.log("Uchunchi tomon uzunligi: " ,thirdSide(firtsSide,secondSide));




/* 11-masala .Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni bir inchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang*/

let num1 = 13;
let num2 = 3;

function qoldiqSon(n1,n2){
 let q = n1%n2;
 return q;
}

console.log("Qoldiq son: ",qoldiqSon(num1,num2));



/* 12-masala Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
qaytaradigan funksiya yasang. Formula S = bo’yi * eni*/

let boyi = 9;
let eni = 10;

function turtburchakYuzi(b,en) {
   let S = b*en;
   return S;   
}

console.log("Turtburchakki yuzi: ",turtburchakYuzi(boyi,eni));



/* 13-masala Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a” stringini birlashtirib qaytarsin.*/

function stringQoshish(a) {
     let sentence = "Something " + a;
     return sentence;
}
console.log(stringQoshish("is better than you"));



/* 14-masala  Quyidagi namunalarga qaragan holatda funksiya yasang.
Namuna:
kvadrat(5) => 25
kvadrat(9) => 81
kvadrat(100) => 10000 */

function square(s){
    let kvadrat = s**2;
    return kvadrat;
}
console.log( "Kvadrat son: ",square(6));



/* 15-masala .Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.*/

function noldan(raqam) {
  if(raqam<=0){
    return true; 
 }else{
    return false; 
 }
}
console.log(noldan(3));



/* 16-masala .Funksiya ko’p burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180 */

 let burchaklarSoni = 10;

function innerCorner(n) {
    let formula = (n-2)*180;
    return formula;
    }

    console.log("Shaklning ichki burchaklar yig’indisini: ",innerCorner(burchaklarSoni));




