const words = ['Daksh', 'Chandu', 'Toshi', 'Sri'];
words.splice(1,2,'Jyo');
console.log(words);
console.log(typeof(words));
for(let i in words) {
    console.log('Hello', words[i]);
}

// const myFunction = function (name) {
//     console.log('Hi ', name);
// }

let myFunction = (name) => {
    console.log('Hi', name);
}
words.forEach((name)=>{
    console.log('My name is', name);
})

myFunction('dk');
console.log(typeof(myFunction))

let str = 'Dakshatha';
let res = "";
for(let i = str.length-1; i >= 0; i--) {
    res+=str[i];
}
console.log(res);

let alphabet = 'madhavisethu';
const lexicalAlphabet = alphabet.split("").sort().join("");
console.log(lexicalAlphabet);

let sum = 0;
const arr = [1,2,3,4,5];
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
const avg = sum / arr.length;
console.log(avg);