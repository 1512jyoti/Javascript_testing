let rows=5;
let string='';

//reverse star
for(let i=1;i<=rows;i++){
    for(let j=i;j<=rows;j++){
       string+='*';
    }
    string+="\n";
}

//star
// for(let i=0;i<rows;i++){
//     for(let j=0;j<i;j++){
//        string+='*';
//     }
//     string+="\n";
// }


console.log(string)