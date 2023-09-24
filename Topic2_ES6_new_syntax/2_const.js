//#1. su dung tu khoa const de khai bao bien giong tu khoa let
// const PI = 3.14;
// console.log(PI);
//#2. dinh nghia ra doi tuong
// const user = Object.freeze ({
//     "name": "Nguyen van A",
//     "age": 20,
//     "address": {
//         "street": "190 Nguyen Tuan",
//         "state": "Thanh Xuan"
//     }
// })  
// console.log(user);

// user.name = "David Beckham"
// user.age = 21
// user.address.street = "221 Nguyen Trai"

// console.log(`Name: ${user.name}, Age: ${user.age}, Street: ${user.address.street}`);

//#3. Dinh nghia Array
// const numbers = [3, 4, 3]
// const studentList = [
//     {"id": 1, "name": "John", "age": 20},
//     {"id": 2, "name": "Marry", "age": 20},
//     {"id": 3, "name": "Matthew", "age": 20},
//     {"id": 4, "name": "Thor", "age": 22},
//     {"id": 5, "name": "Tom", "age": 23}
// ]
// console.log(studentList);
const students = [
    {"id": 1, "name": "John", "email":"john@gmail.com"},
    {"id": 2, "name": "Mary", "email":"mary@gmail.com"},
    {"id": 3, "name": "Tom", "email":"tom@gmail.com"},
    {"id": 4, "name": "John", "email": "john1@gmail.com"}
    ]
    console.log(students);
// for (let i = 0; i < studentList.length; i++) {
//     const e = studentList[i];
//     console.log(`${e.id}, ${e.name}, ${e.age}`);
// }

// for (const e of studentList) {
//     console.log(`${e.id}, ${e.name}, ${e.age}`);
// }

//#4. su dung constant dinh nghia cac doi tuong: maps, sets
//------Ex------
//Viet cac ham thuc hien cac cong viec:
// - Them mot sinh vien vao studentlist
// - Tim kiem va in ra danh sach cac sinh vien co ten bat dau boi tu khoa can tim
// - Tim va in ra cac sinh vien co tuoi tu 19-20
// -sap xep va hien thi danh sach theo thu tu tang dan theo ten va giam dan theo tuoi neu ten trung nhau

//1.add
const newStudent = {"id": 5, "name": "Hung", "email":"Hung@gmail.com"};
students.push(newStudent);

//2.search
const keyword = "Jo";
// Sử dụng phương thức filter để lọc ra danh sách các sinh viên có tên bắt đầu bằng từ khoá
const filteredStudents = students.filter(student => student.name.startsWith(keyword));
// In ra danh sách sinh viên đã lọc
console.log(filteredStudents);

//3.search and edit 
//Find index of specific object using findIndex method.    
objIndex = students.findIndex((obj => obj.id == 1));
//Log object to Console.
console.log("Before update: ", students[objIndex])
//Update object's name property.
students[objIndex].email = "Nikky@gmail.com"
//Log object to console again.
console.log("After update: ", students[objIndex])

//4.Sort
students.sort((a, b) => a.name.localeCompare(b.name))
students.sort((a, b) => b.id - a.id);
students.forEach((e) =>{
    console.log(`${e.id} ${e.name} ${e.email}`);
})
console.log(students);

//5. remove
var deleteById = students.filter(function(el) { return el.id != "2"; }); 
console.log(deleteById);