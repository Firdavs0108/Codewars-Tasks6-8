
///Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'



function solution(str){
    let str2 = ''
 for (let index = str.length-1; index >= 0; index--) {
    const element = str[index];
    str2+=str[index]
    
 }
    console.log(str2);
}

solution('Firdavs')