let num=[1,2,3,4,5,6,7,8,9]
let carcter=['ab','ac','ad','aa']
let str=' mjjjj@g.com k@...com w@jhhhh.com o@g.net hallo abdalla she tell me i love you Abdalla @#$%&*'
let regex=/abdalla/ig;
let special=/[^a-z]/ig
let  w=/\w/ig
let  W=/\W/ig
let  a0=/./ig
let mail=/\w+@\w+.(com|net)/g
let testmap=num.map((n)=> n * n)
console.log(testmap)
let testfilter=num.filter((n)=> n < 4)
console.log(testfilter)

console.log(str.match(regex))
console.log(str.match(special))
console.log(str.match(w))
console.log(str.match(W))
console.log(str.match(a0))
console.log(str.match(mail))



let ind=num.indexOf(1)
console.log(ind)


let zero=0;
let counter = 3;
let my=[11,22,33,44,55,66,7,8]
console.log(my[counter])
my =my.slice(0,4)
my =my.reverse()
console.log(my)
// ===================================
console.log(my.slice(1,3))
// ===================================
my.forEach((el,idx)=> console.log(idx ,el))
console.log(my.flatMap((x) => x * 2))

// ===================================
let fil=my.filter((el)=> el > 33)
console.log(fil)
//====================================
let red=my.reduce((mom,value)=> mom + value)
console.log(red + 'thit')

//====================================
let strr = '1234567890'
let ress =Array.from(strr,mapfn);
console.log(ress)

function mapfn(x){
    return Number(x)
}

//====================================
const d = new Date();
console.log(d)