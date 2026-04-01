// OOPs in JS
// let obj = {
//     a: 2003,
//     b: "harry"
// }

// console.log(obj)

// class Animal {
//     constructor(name) {
//         this.name = name;
//         console.log('Object is created...')
//     }
//     eats() {
//         console.log('Kha raha hu')
//     }
//     jumps() {
//         console.log('Kood raha hu')
//     }
// }

// class Lion extends Animal {
//     constructor(name) {
//         super(name)
//         console.log('he is the king!')
//     }
//     eats() {
//         console.log('roar... Kha raha hu ')
//     }
// }

// let a = new Animal("rabbit");
// console.log(a)

// let l = new Animal("shera");
// console.log(l)



// advanced JS...........................................

async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
}

function sum(a, b,c){
    return a+b+c
}

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [x,y, ...rest]=[4, 5, 7, 8 , 9 , 10]
    // console.log(x, y, rest)

    // let obj={
    //     a:1,
    //     b:2,
    //     c:3
    // }

    // let {a, b} =obj
    // console.log(a, b)

    let arr=[5, 6, 7]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
})()

