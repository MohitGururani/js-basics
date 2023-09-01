const myNums = [1, 2, 3];

const initial = 0;

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, nums) => acc + nums, initial);

console.log(myTotal);





const shoppingCart =[
    {
        itemName:"html course",
        price:2999
    },
    {
        itemName:"react course",
        price:3999
    },
    {
        itemName:"js course",
        price:4999
    },
    {
        itemName:"data science course",
        price:15999
    }
]

const total = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(total)