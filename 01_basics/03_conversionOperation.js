let score = 33 //null=0  '33abs'= NaN   true=1,false=0 ''= false  'bhawna'= true

console.log(typeof score); // number when 33 string when '33'
console.log(typeof (score)); // number when 33 string when '33'

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let number = 1
let booleannumber= Boolean(number)
console.log(booleannumber);

let string = 33
let stringnumber = String(string)
console.log(stringnumber);
console.log (typeof stringnumber);

/// ******************* operations *********************
let value= 9
let negValue = -value
// cosole.log(negValue)
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3);


let str1="hello"
let str2="bhawna"

let str3=str1+str2
console.log(str3);

console.log(1 +"1");
console.log("2"+ 1);
console.log("1"+2+2);
console.log(1+2+"2");

//console.log(+true); ----1  but not preferred to write confusing codes
//console.log(+"");  -----0






