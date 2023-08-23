// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.filter((nums) => nums > 4);

// const newNums = nums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2001 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1985, edition: 2002 },
  { title: "Book Three", genre: "History", publish: 1989, edition: 2003 },
  { title: "Book Four", genre: "Science", publish: 2001, edition: 2004 },
];

//const userBooks= books.filter((bk)=> bk.genre === "History")
const userBooks= books.filter((bk)=>bk.publish >2000 && bk.genre ==="History") // `(bk)` used as the parameter that represents each book object as we go through the array,we can use it to check conditions or perform actions on each ekements.

console.log(userBooks)