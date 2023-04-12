
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.



var summation = function (num) {

let sum = 0
   for (let index = 0; index <= num; index++) {
    const element = num[index];
    sum+=index
    
}
console.log(sum);
  }

  summation(6)


  // let summation = (n) => { 
  //   let sum = 0
    
  //   for(i = 0; i<= n; i++){
  //       sum = sum + i
  //   }
    
  //   console.log(sum);
  //   }
  //   summation(4)