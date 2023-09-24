//Sử dụng toán tử spread(toán tử rải) cho phép duyệt từng phần tử trong mảng để rải vào từng vị trí mới
const old = [1, 2, 3];
//Rải các phần tử của old vào vị trí đầu của newArray1
// const newArray1 = [...old, 4, 5];
// console.log(newArray1);
//Ex:
const originUsers = [
  { id: 1, name: "David", age: 21 },
  { id: 2, name: "asd", age: 22 },
  { id: 3, name: "fgh", age: 20 },
];
const newUsers = [
  ...originUsers,
  { role: "candidate", name: "qwe", status: true },
];
console.log(newUsers);

//Ex2:
function sumNumber(...numbers) {
  let total = 0;
  for (const item of numbers) {
    if (typeof item === "number") 
    total += item;
  }
  console.log("Output: " + total);
}

const listData = [3, "Hello", true, 3.5];
sumNumber(listData, 3.5)
