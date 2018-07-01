//arrow function
// let sum = (a,b)=>a+b;
// let sum2 = (c=1, d=2) => {
//     console.log(c+d);
//     alert(c+d);
// }
// sum2();
// console.log(sum(2,4));

// let cont = (a) => this.arguments;
// function cont2(a) {
//     console.log(this.arguments);
// }
// cont();
// console.log(cont2());


// function foo (a,b){
//     console.log(a+b);
//     for(let p in arguments){
//     console.log(arguments[p]);
//     }
// }
// foo(1,2);

// let arr1 = [1,2,3,4,5,6,7];
// let arr1result = arr1.filter((elem,i,arr)=> elem>4);
// console.log(arr1result);
// console.log(arr1);

// let arr2 = [1,2,3,4,5,6,7];
// let arr2result = arr2.map((elem,i,arr)=> arr[i]*5);
// console.log(arr2result);
// console.log(arr2);


// let arr3 = [1,2,3,4,5,6,7];
// let arr3result = arr3.forEach((elem,i,arr)=> {
//     console.log(`${elem} - elem`);
//     console.log(`${i} - index`);
//     console.log(`${arr} - array`);
// });
// console.log(arr3);


//reduce(prev,next,i,arr)
//reduceRight(prev,next,i,arr)
// let arr4 =[1,2,3,4,5,6,7,8,9];
// let arr4result = arr4.reduce((prev,next,i,arr) => prev+next);
// console.log(arr4result);
// console.log(arr4);

const arrObj1 = [
    {name: 1},
    {name: 2}
];
const result = arrObj1.reduce(function(prev,next){return prev.name+next.name});
console.log(result);

