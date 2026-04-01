console.log("hello world!")
// console.log("Hey this is JS tutorial")

// let a=5;
// var b=6;
// var c="JavaScripts";

// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

// {
//     let a=55;
//     console.log(a)
// }
// console.log(a)

// let x = "john";
// let y = "555";
// let z = "82.456";
// const r = true;
// let p = undefined;
// let q = null;

// console.log(x, y, z, r, p, q)
// console.log(typeof x, typeof y, typeof z, typeof r, typeof p, typeof q)

// let o ={
//     "name": "Harry",
//     "job code":556600
// }
// console.log(o)
// o.salary ="1 lakh"
// console.log(o)





// dom manipulation..........................................
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red";
// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach(e =>{
//     console.log(e)
// })




// Events in JS...............................

// let button = document.getElementById("btn")

// button.addEventListener("click", () => {
//     alert("i was clicked, YAY!...")
//     document.querySelector(".box").innerHTML="<b>Yayy you were clicked<b> Enjoy your click"
// })

// document.addEventListener("DOMContentLoaded", () => {
//   let button = document.getElementById("btn")
//   button.addEventListener("dblclick", () => {
//     document.querySelector(".box").innerHTML="<b>Yayy you were clicked<b> Enjoy your click"
//   })
// })



// JS Callback & promises..............................................

// console.log("Harry is a HACKER")
// console.log("Harry is a Programmer")

// setTimeout(() => {
//     console.log("this is a setout timer")
// }, 5000);

// console.log("End of HARRY")



// const fn =() => {
//   console.log("nothing")
// }


// const callback = (arg) => {
//     console.log(arg)
//     fn()
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("Scripts");
//     sc.src = src;
//     sc.onload = callback("HArrY");
//     document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajex/libs/prism/9000.0.1/prism.min.js", callback)

// promises..................................
// let prom1= new Promise((resolve, reject )=>{
//     let a =Math.random();
//     if(a<0.5){
//         reject("rejected")
//     }
//     else{
//         setTimeout(()=>{
//             console.log('Yes, am i done.')
//             resolve("Harry")
//         }, 3000)
//     }
// })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })



// async / await & fetch............................................
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(445)
//         }, 3500);
//     })
// }

// async function main() {
//     console.log('loading modules...')
//     console.log('modules running...')
//     console.log('loading data...')

//     let data =  await getData();
//     console.log(data)
//     console.log('processing data...')
//     console.log('Task 2')
//     console.log('Task 3')
// }

// main()
// data.then((v)=>{
    //     console.log(data)
    //     console.log('processing data...')
    //     console.log('Task 2')
    //     console.log('Task 3')
    // // })
    
    
    // async function getData() {
    //    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   let data = await x.json()
    //   console.log(data)

    // }
    
    // async function main() {
    //     console.log('loading modules...')
    //     console.log('modules running...')
    //     console.log('loading data...')
    
    //     let data =  await getData();
    //     console.log(data)
    //     console.log('processing data...')
    //     console.log('Task 2')
    //     console.log('Task 3')
    // }
    
    // main()





// error handling........................................
// let a =prompt("enter a num")
// let b =prompt("enter a num")
// if(isNaN(a)|| isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed");
    
// }
// let sum = parseInt(a) + parseInt(b)

// function main(){
//     let x=1;
// try {
//     console.log("the sum is:", sum*x)
// } catch (error) {
//     console.log("error , manage it")
// }
// finally{
//     console.log("system exited")
// }

// }

// main()
