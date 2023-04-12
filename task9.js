


//Write a function which calculates the average of the numbers in a given list.



function find_average(array) {
    let sum = 0;
    let avg = 0
    for (let i = 0; i < array.length; i++){
       sum += array[i]
       avg = sum / array.length
    
    }
      console.log(avg);
    }
find_average([2,3,4,5])

// function findAverage(array) {

// const average = array.reduce((a, b) => a + b, 0) / array.length;

// console.log(average);
// }
//      findAverage([3,4,5,3])











