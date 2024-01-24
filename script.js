
// average:
let a = 10;
let b = 15
function average(a,b){
    return(a+b)/2
}
let result=average(a,b)
console.log(result);



// while-practice:
let i = 0;
while(i<5){
    console.log(i*2)
    i++
}

// for in practice:
let names=['mohsen','leyla','shayan','danial'];
for(let index in names){
    console.log(index)
    console.log(names[index])
    console.log(names[2])
}

let user={
    name:"maryam",
    login:true,
    id:24
}
for(let key in user){
    console.log(key)
    console.log(user[key])
    console.log(user["login"])
}

