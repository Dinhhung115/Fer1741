//su dung tham so rest (phan con lai) de dinh nghia ham
// function sumNumber(a, ...arr){
//     let total = a;
//     for(const item of arr){
//         total += item;
//     }
//     return total;
// }

// const result = sumNumber(2, 4, 3, 5, 1)
// console.log(("Total number: " + result));

function sumNumber1(...arr){
    let total = 0;
    for (const item of arr){
        if(typeof item === "number")
        total += item;
    }
    return total;
}

const numbers = [2,4,"Hello", true, 6]
console.log("Total number:" + sumNumber1(...numbers));