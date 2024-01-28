
// average:
// let a = 10;
// let b = 15
// function average(a, b) {
//     return (a + b) / 2
// }
// let result = average(a, b)
// console.log(result);



// while-practice:
// let i = 0;
// while (i < 5) {
//     console.log(i * 2)
//     i++
// }

// for in practice:
// let names = ['mohsen', 'leyla', 'shayan', 'danial'];
// for (let index in names) {
//     console.log(index)
//     console.log(names[index])
//     console.log(names[2])
// }


// let person={
//     fname:"shayan",
//     eayColor:"blue"
// }
// for (let index in person) {
//     console.log(index)
//     console.log(person[index])
//     console.log(person[2])
// }

// let user = {
//     name: "maryam",
//     login: true,
//     id: 24
// }
// for (let key in user) {
//     console.log(key)
//     console.log(user[key])
//     console.log(user["login"])
// }

// for of practice:
// let sentence = "this is my practice";
// for (let letter of sentence) {
//     console.log(letter)
// }

// continue & break:
// for (let x = 10; x > 0; x--) {
//     if (x > 3) {
//         continue;
//     }

//     console.log(x)
// }
// for (let x = 10; x > 0; x--) {
//     if (x < 6) {
//         break;
//     }

//     console.log(x)
// }

// sentences:
// let sentences = "he is my 'son' ";
// console.log(sentences)

// let sonName = "my son name is \"dani\"";
// console.log(sonName)

// let friends = "friends";
// let text = `hello my ${friends} `;
// console.log(text);


// properties & methods of string:
// let tweetOne = "eggs is one of the popular breakfast that we can cook eggs in different ways";
// let tweetTwo = "my best hobby is programming";
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




//factory function:
// function person(job,id,firstName){
//     return{
//         job,
//         id,
//         firstName,
//         caption(){
//             console.log(` ${firstName} with id ${id} is ${job} `)

//         }

//     }
// }

// let personOne=person("teacher",2,"ali");
// console.log(personOne.caption());



// constructor function:
// function Person(job, id, firstName) {
//     this.job = job,
//         this.id = id,
//         this.firstName = firstName
//     this.caption = function () {
//         console.log(` ${this.firstName} with id ${this.id} is ${this.job} `)
//     }
// } 
// let PersonOne= new Person("teacher",2,"Ali");
// console.log(PersonOne.caption())


// delete & add:
// let car={
//     brand:"saypa",
//     year:2019,
//     color:"black"
// }
// delete car.brand;
// console.log(car);
// car.tormoz="ABS";
// console.log(car);


//convert objects to arrays: 
// for(key of Object.keys(car)){
//     console.log(car[key])
// }
// for(key of Object.entries(car)){
//     console.log(key[1])
// }




// how to copy of refreence typs:
let car={
    brand:"saypa",
    year:2019,
    color:"black",  
}

// for(let key in car){
//     car[Key]=car2[key];
// }
// car2.tormoz='ABS'
// console.log(car)

// let car2=Object.assign({tormoz:"ABS"},car)
// console.log(car2)

// let car2={ tormoz:"ABS",...car};
// console.log(car2)


// Math:
// choose the one number between two number:
// function genreatRand (min,max){
//   return Math.floor(Math.random()*(max-min)+min)  
// }
// console.log(genreatRand(12,25))

// let num =1.6;
// console.log(Math.round(num));