// function createUser(firstName, lastName, age) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getBirthYear: createUser.commonMethods.getBirthYear,
//     // getBirthYear: function getBirthYear() {
//     //   return new Date().getFullYear() - this.age;
//     // },
//   };
// }

// createUser.commonMethods = {
//   getBirthYear: function getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = createUser("pankaj", "kumar", 23);
// const user2 = createUser("Tejas", "kalbe", 23);
// console.log(user1);
// console.log(user1.getBirthYear());
// console.log(user2);
// console.log(user2.getBirthYear());
// console.log(user1.getBirthYear === user2.getBirthYear);

// const arr = [10, 20];
// const arr1 = [10, 20];
// console.log(arr);
// console.log(arr.push(30));
// console.log(arr);
// console.log(arr.push === arr1.push);

// const mysmbols = Symbol("key1");

// const User = {
//   name: "John",
//   [mysmbols]: 10,
//   age: 30,
//   isAdmin: true,
// };
// console.log(User.name);
// console.log(typeof User[mysmbols]);
// console.log(User);

const course = [
  {
    name: "javascript",
    price: 1200,
  },
  {
    name: "python",
    price: 2000,
  },
  {
    name: "javascript",
    price: 3000,
  },
  {
    name: "C",
    price: 100,
  },
  {
    name: "Nodejs",
    price: 200,
  },
  {
    name: "Reactjs",
    price: 400,
  },
];
const addCart = course.reduce((acc, items) => {
  return items.course === "javascript" ? acc + items.price : acc;
  // return items.name === "javascript" ? acc + items.price : acc;
}, 0);
console.log(addCart);
