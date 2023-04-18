// // var obj={a:1,b:2};
// // delete obj.a;
// // console.log(obj);

// let arr=[1, 7, 4, 3, 4, 8, 7];
// let len=arr.length;
// let k=2;

// function duplicateArray(arr, n, k)
// {
//     // unordered_map to count
//     // occurrences of each element
//     count_map = new Map()
//     for (let i=0; i<n; i++)
//         count_map[arr[i]] = 0;
//     for (let i=0; i<n; i++)
//         count_map[arr[i]]++;
     
//     for (let i=0; i<n; i++) 
 
//         // if count of element == k ,then
//         // it is the required first element
//         if (count_map[arr[i]] == k)
//             return arr[i];
             
//     // no element occurs k times
//     return -1;
// }

// console.log(duplicateArray(arr,len));

// let num=3456;

//    let result=0;
//     while(num>0){
       
//         rem=num%10;
//         // console.log(rem);
//         result=result*10+rem;
//         num=Math.floor(num/10);
//     }
//     console.log(result)


// let  a ="l";
// //  a=9
// console.log( a , typeof a);

// let myArray2 = [1, 2, 3, 4];
//    const arr= myArray2.forEach((element, index) => {
//         return myArray2[index] = element * element;
//     }).reverse();
//     console.log(arr);
// const animal = {  
//     first: 'The',  
//     last: 'Lion' ,
//     age:'' 
// };  
// const propertyNames=Object.entries(animal);  
// console.log(propertyNames);  
// const a='11'*"a";
// console.log(typeof a, a)
const array = [3, 8, 7, 5, 3, 9, 8];
      const uniqueSet = new Set(array);
      const filteredElements = array.filter(currentValue => {
            if (uniqueSet.has(currentValue)) {
               uniqueSet.delete(currentValue);
            }
            else {
               return currentValue;
            }
         }
      );

    // console.log("a",array);
    console.log("b",uniqueSet);
    console.log("a",filteredElements);

