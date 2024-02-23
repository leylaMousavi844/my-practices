
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
// let car={
//     brand:"saypa",
//     year:2019,
//     color:"black",  
// }

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



// Date:
// let d1= new Date();
// console.log(d1);
// let d2 =new Date("2023-02-05");
// console.log(d2);
// console.log(d2.getFullYear());
// console.log(d2.getSeconds());
// console.log(d2.toISOString());



// add data to arrays:
// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.splice(1,2,5);
// console.log(arr);
// console.log( arr.splice(1,2,5))
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);



// find index in arrays:
// let arr=[1,2,3,4,5,5,1,5,2];
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(2));
// console.log(arr.includes(6));

// let student=[
//     {grad:"A",age:20},
//     {grad:"B",age:23},
//     {grad:"c",age:19}
// ]
// console.log(student.find((el)=>el.age===23));
// console.log(student.find((el)=>el.age===26));



// arrays:
// let numbers=[10,5,25,63,45,78,41];
// let anyNumbers=[14,22,78,20,12];
// let newArray= numbers.concat(anyNumbers);
// console.log(newArray);
// console.log(numbers.slice(1,5));
// let anyNumbers2=anyNumbers.slice(1);
// console.log(anyNumbers2);
// let newArray=[1,...numbers,12,...anyNumbers];
// console.log(newArray);
// let arr1=[...numbers];
// console.log(arr1);


// foreach:
// let products = [
//     { title: "mobile", price: "1000" },
//     { title: "tablet", price: "1500" },
//     { title: "labtop", price: "2000" },
//     { title: "pc", price: "3000" }
// ]
// let max={title:"",price:0}

// products.forEach(function (item) {
//     if(item.price>max.price){
//         max.price=item.price;
//         max.title=item.title

//     }
// })
// console.log(max);




// convert array to string:
// let arr =[0,1,1,2,5,6];
// console.log(arr.join("-"))
// convert string to array with split() 




// every & some:
// let arr=[10,15,8,20,12,17];
// let result=arr.every(function(value){
//     return value>=10
// })
// let result=arr.some(function(value){
//     return value< 10
// })
// console.log(result);




// filter:
// let arr=[15,20,19,14,12,16];
// let result=arr.filter(function(value){
//     return value>=15;
// })
// console.log(result);



// map:
// let arr=['sara','reza','mona','roya','mohammad'];
// let result=arr.map(value=>`<span>${value}</span>`);
// console.log(result);
// let result=arr.map(value=>({name:value}));
// console.log(result);







// practice1:
// let student = [
//     {
//         name: "Ali",
//         age: 20,
//         grad: 90
//     },
//     {
//         name: "Mohammad",
//         age: 18,
//         grad: 40
//     },
//     {
//         name: "Reza",
//         age: 17,
//         grad: 80
//     }
// ]
// let max = { maxName: "", grad: 0 }
// student.forEach(function (item) {
//     if (item.grad > max.grad) {
//         max.grad = item.grad;
//         max.maxName = item.name
//     }
// })
// console.log(max);


// practice 2:
// let arr = [4,2,7,1];
// let sortedArr = [];

// const arrLength = arr.length;

// for(let i=0; i < arrLength; i++) {
//     let min = arr[0];
//     for(let j=1; j < arr.length; j++) {

//         if(arr[j] < min) {   
//             min = arr[j];
//         }

//     }

//     sortedArr.push(min);
//     arr.splice(arr.findIndex((item) => item == min), 1)
//     if(arr.length === 1) {
//         sortedArr.push(arr[0])
//         break;
//     }
// }

// console.log(sortedArr)
// چیزی که دراین تمرین یاد گرفتم این بود که
//  اگر میخواهیم حلقه ی   داخلی که با متغیر جی ایجاد کرده ایم تا آخر عمل کند باید
//  .حلقه ی بیرونی تا آخرین عضو بچرخد.به همین دلیل آی را یک ثابت در نظر گرفتیم
// ودوما دلیل اینکه ما از دوحلقه ی تودر تو استفاده میکنیم این است که یکی را ثابت نگه دارد 
// وبقیه را با آن مقایسه کند.



// practice3:
// let products = [
//     {id: "1", title: "phone", price: "9000"},
//     {id: "10", title: "pc", price: "21000"},
//     {id: "14", title: "tablet", price: "12000"},
//     {id: "54", title: "power", price: "19000"},
//     {id: "67", title: "watch", price: "17000"}
// ];

// let userSelection = [1,54,67];

// let userCart = [];

// products.forEach((item, index) => {
//     let res = userSelection.findIndex((userSelectionItem) => userSelectionItem === parseInt(item.id))

//     res !== -1? userCart.push(item) : null;

// })


// // sorted user cart
// let sortedUserCart = [];


// userCart.forEach((item, index) => {
//     let min = 0;
//     userCart.forEach((otherItem, otherItemIndex) => {
//         if(parseInt(userCart[min].price) > parseInt(otherItem.price)) {
//             min = otherItemIndex;
//         }
//     })
//     sortedUserCart.push(userCart[min]);
//     userCart.splice(min, 1);
//     if(userCart.length === 1) {
//         sortedUserCart.push(userCart[0]);
//     }
// });


// console.log(sortedUserCart);
// دراین تمرین یاد گرفتم که تابع 
//   چگونه عمل میکند findIndex  
// این تابع اگر اندیس عضو مورد نظر راپیا کرد 
// که آنرا برمیگرداند واگر پیدا نکرد عدد منفی یک را برمیگرداند





// var students = [
//     {id: 1, name: "Ali", age: 20},
//     {id: 2, name: "Alireza", age: 23},
//     {id: 13, name: "Maryam", age: 26},
//     {id: 14, name: "Mohammadali", age: 19},
//     {id: 5, name: "Mohammad", age: 22},
//     {id: 9, name: "Fateme", age: 21}
// ]
// let newArr=[]
// let searchQuery=window.prompt("inter your name");
// console.log(searchQuery);
// students.forEach((item)=>{
//     if(item.name.toLowerCase().includes(searchQuery.toLowerCase())){
// newArr.push(item)
//     }
// })
// console.log(newArr)



// practice4:
// let person = [
//     {gender:"mard", name: "Hossein", age: 23},
//     {gender:"mard", name: "Ariyan", age: 22},
//     {gender:"mard", name: "Alireza", age: 21},
//     {gender:"mard", name: "Reza", age: 20},
//     {gender:"mard", name: "Amir", age: 19},
//     {gender:"zan", name: "Sahar", age: 18},
//     {gender:"zan", name: "Maryam", age: 17},
//     {gender:"zan", name: "Negin", age: 16},
//     {gender:"zan", name: "Melorin", age: 15},
//     {gender:"zan", name: "Deniz", age: 14},    
// ];
// let results = [];

// let searchQuery = prompt("Enter Gender");
// let searchQuery2 = prompt("Enter Age");

// person.forEach((item) => {
//     if(item.gender.toLowerCase().includes(searchQuery.toLowerCase()) && item.age >= parseInt(searchQuery2)){
//         results.push(item)
//     }
// });
// console.log(results);
// //__________________________________________________
// // Show Name with an alert :
// //__________________________________________________
// let names = "";
// if(results.length) {
//     results.forEach((item) => {
//         names = item.name + ',' + names;
//     });
// } else {
//     names="nothing found!";
// }
// alert(names);





// practice5:
var products = [
    { id: 1, name: "laptop", price: 40000000 },
    { id: 2, name: "phone", price: 10000000 },
    { id: 13, name: "pen", price: 10000 },
    { id: 4, name: "cookie", price: 35000 },
    { id: 5, name: "milk", price: 47000 },
    { id: 9, name: "pencil", price: 7000 }
];

var counter = {
    4: { available: true },
    5: { available: false },
    9: { available: true },
    1: { available: false },
    2: { available: false },
    13: { available: true },
};

// let newProducts=[]
// for (let index = 0; index < products.length; index++) {
//     for (let key in counter) {
//        if(products[index].id==key){
//         newProducts.push({...products[index],...counter[key]})

//        }
//     }

// }
// console.log(newProducts);

// another way :
const result = products.map(item => ({ ...item, ...counter[item.id] }))
console.log(result)






// practice6:
var hero = [
    { id: 1, heroName: 'hero one' },
    { id: 2, heroName: 'hero two' },
    { id: 3, heroName: 'hero three' }
]
var abilitie = {
    1: { abilities: [' power ', ' speed ', ' jump '], src: './image/hero1.jpg' },
    2: { abilities: [' fire ', ' knife ', ' bomb '], src: './image/hero2.jpg' },
    3: { abilities: [' gun ', ' hidden ', ' map '], src: './image/hero3.jpg' }
}


const heroes = hero.map(item => ({ ...item, ...abilitie[item.id] }))
console.log(heroes)
heroes.forEach(item => {
let mainElement=document.getElementById("main")

let parent=document.createElement("div")
mainElement.appendChild(parent);
let image=document.createElement("img")
parent.appendChild(image);
image.src=item.src; 
image.style.width="300px";
image.style.height="190px";
let heroNames=document.createElement("h2");
parent.appendChild(heroNames);
heroNames.innerText=item.heroName;

let abilities=document.createElement("ul");
abilities.style.listStyle="none"
let title=document.createElement("h3")
abilities.appendChild(title);
title.innerText="abilities:"
parent.appendChild(abilities);
item.abilities.forEach(index=>{
let liItem=document.createElement("li");
abilities.appendChild(liItem);
liItem.innerText=index;  
})
})






