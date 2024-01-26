
// average:
let a = 10;
let b = 15
function average(a, b) {
    return (a + b) / 2
}
let result = average(a, b)
console.log(result);



// while-practice:
let i = 0;
while (i < 5) {
    console.log(i * 2)
    i++
}

// for in practice:
let names = ['mohsen', 'leyla', 'shayan', 'danial'];
for (let index in names) {
    console.log(index)
    console.log(names[index])
    console.log(names[2])
}

let user = {
    name: "maryam",
    login: true,
    id: 24
}
for (let key in user) {
    console.log(key)
    console.log(user[key])
    console.log(user["login"])
}

// for of practice:
let sentence = "this is my practice";
for (let letter of sentence) {
    console.log(letter)
}

// continue & break:
for (let x = 10; x> 0; x--) {
    if (x > 3){
        continue;
    }
       
    console.log(x)
}
for (let x = 10; x> 0; x--) {
    if (x<6){
        break;
    }
       
    console.log(x)
}

// sentences:
let sentences="he is my 'son' ";
console.log(sentences)

let sonName= "my son name is \"dani\"";
console.log(sonName)

let friends="friends";
let text=`hello my ${friends} `;
console.log(text);


// properties & methods of string:
let tweetOne="eggs is one of the popular breakfast that we can cook eggs in different ways";
let tweetTwo="my best hobby is programming";
// console.log(tweetOne.replaceAll("eggs","#eggs"))
// console.log(tweetOne.length)
// console.log(tweetOne.slice(2,6))
// console.log(tweetOne.substring(2,6))
// console.log(tweetOne.toLocaleLowerCase())
// console.log(tweetOne.toUpperCase())
// console.log(tweetOne.concat(" ",tweetTwo))
// console.log(tweetOne.charAt(2))
// console.log(tweetTwo.split(" "))


// let newTweet=tweetOne.replace("is","#is")
// console.log(newTweet)

