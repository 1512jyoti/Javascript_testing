const string="racer";
const str=string.split(" ").reverse().join();
console.log(str);

function plaindromeTest(string){
    let len=string.length;

    // for(let i=0; i<len/2; i++){
    //     if(string[i]==string[len-i-1]){

    //         return "yes";
    //     }
    //     else{
    //         return ;
    //     }
    // }

    if(str==string){
        return "true";
    }
    else{
        return "false";
    }
}

const result = plaindromeTest(string);
console.log(result);

