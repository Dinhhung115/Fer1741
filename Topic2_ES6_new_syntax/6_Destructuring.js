//Object destructuring
// const existingUser = {
//   name: "Dinh thanh hung",
//   email: "Hungdinh15203@gmail.com",
//   password: "123456",
// };

// //destructuring
// const { name = n, email = e, p: p = "Not Show" } = existingUser;
// console.log(`Welcome : ${n}, email : ${e}, password:${p}`);
//Array destructuring
//Database
const data = [
  {
    //Collection
    'student': [
      { id: 1, name: "david", age: 22, class_code: 1},//document
      { id: 2, name: "john", age: 23,  class_code: 1},
      { id: 3, name: "Hung", age: 24,  class_code: 1}
    ]
  },
  {
    'classes': [
        {'id': 1, 'name': 'se1741'},
        {'id': 2, 'name': 'se1742'},
        {'id': 3, 'name': 'se1743'}
    ]
  },
  {
    'courses': [
        {'id': 1, 'code':'FER201m'},
        {'id': 2, 'code':'FER202m'}
    ]
  }
];
//log ra danh sach cac: student, class, course
const[listStudent, listClasses, listCourses] = data;
console.log(listStudent);
console.log(listClasses);
console.log(listCourses);

const {student} = listStudent
console.log("List of student:");


student.map(s => {
    s.age = 24;
    //console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_code}`);
})
for(const s of student) {
    console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_code}`);
}