//#1.Phân biệt giữa let var, xét phạm vi của từng loại
// for(var i = 0; i<5; i++){
//     console.log("Value of a element: "+i);
// }
// console.log("Value of a element: " + i);

// for(let j = 0; j<5; j++){
//     console.log("Value of a element: " + j);
// }
// console.log("Value of a element: " + j);

//ket luan: let dung de dinh nghia cac bien kieu (primative, array, object) trong pham vi cua khoi
//ma no dc khai bao

//#2. thuoc tinh toan cuc cua toi tuong window
var name = "David";
console.log("Name: " + window.name);

let name1 = "marry";
console.log("Name: " + window.name1);

//#3.Dinh nghia lai(Redeclaration)
var x = 10;
//var x = 20;
var x;
console.log(x);

let y = 20;
//let y = 30; //loi

console.log(y);
