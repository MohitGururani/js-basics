const myArr=[0,1,2,3,4,5]

const myn1= myArr.slice(1,3)
console.log("A",myArr)
console.log("B",myn1)

const myn2= myArr.splice(1,3)
console.log("C",myArr)
console.log("D",myn2)

const array = [...myArr,...myn2]
console.log(array)
