// const user = {
//   firstName: "pankaj",
//   lastName: "Kumar",
//   age: 25,
//   getBirthYear: function getBirthYear() {
//     return new Date().getFullYear() - user.age;
//   },
// };
// console.log(user.getBirthYear());

//TODO: factory function

// function createUser(firstName, lastName, age) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     getBirthYear: createUser.commonMethod.getBirthYear,
//   };
// }
// //! breaking the encapsulation and abstraction
// // function getBirthYear() {
// //   return new Date().getFullYear() - this.age;
// // }
// //? breaking to nhi but ham comlextion badha rahe hai
// // createUser.commonMethod = {
// //   getBirthYear() {
// //     return new Date().getFullYear() - this.age;
// //   },
// // };

// const user1 = createUser("pankaj", "Kumar", 25);
// const user2 = createUser("pankaj", "Kumar", 25);
// console.log(user1);
// console.log(user2);

// function createUser() {
//   return {};
// }

const user = {
  firstName: "pankaj",
  lastName: "Kumar",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    console.log(value);
  },
};
// console.log(user.firstName);
