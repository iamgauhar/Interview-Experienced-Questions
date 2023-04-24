let arr = [1, 2, 3, 4, 5]

let newarr = arr.slice(2, 4)

let newarr2 = arr.splice(2, 1)

// constant

// const a = 10
// a = 11
// console.log(a);


// var a = [7, 5, 3, 1, 2, 4, 6, 11]


// // let double = a.map((el) => {
// //     return el + el
// // })

// let even = a.filter((el) => {
//     if (el % 2 === 0) {
//         return el
//     }
// })

// console.log(even);


// for (let i = 0; i < a.length; i++) {
//     for (j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             let temp = a[i]
//             a[i] = a[j]
//             a[j] = temp
//         }
//     }
// }

// a.sort((a, b) => {
//     return a - b
// })

// console.log(a);

// 
// let num = 10
// function sum() {
//     console.log(2 + 4);
//     function multi() {
//         console(2 * 4)
//     }
// }

// sum()

let array = []


let obj = {
    name: "Gauhar",
    "place": "UP",
    "age": 22
}
// 100 key in obj methode get key
// if(obj[state]){

// }

// console.log((obj.name));
// obj.pincode = 272173

// for (let key in obj) {
//     console.log(obj);
// }

// console.log(obj);

var a = [1, 1, 2, 2, 3, 3, 4]

let noneRepeted = []

for (let i = 0; i < a.length; i++) {
    if (a[i] != a[i + 1]) {
        noneRepeted.push(a[i])
    }
}



console.log(noneRepeted);

for (var i = 1; i <= 4; i++) {

    setTimeout(function () {
        console.log(i);
    }, i * 1000)

}

// var a = "hello world"

// let count = {}

// for (let i = 0; i < a.length; i++) {
//     if (count[a[i]] == undefined) {
//         count[a[i]] = 1
//     } else {
//         count[a[i]]++
//     }
// }

// console.log(count);
