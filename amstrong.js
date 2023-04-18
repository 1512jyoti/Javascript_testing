let arr=[123,153,1634,133,371];
// function amstTest(arr){
    let temp= arr;
  

    // console.log(temp)
    for(let x of temp){
        
        let len=(x.toString()).length
        let sum=0;
        let temp2=x;

        while(temp2>0){
            let rem=temp2%10;
            sum+=Math.pow(rem,len);
        temp2=Math.floor(temp2/10);
            
        }
       
        if(sum==x){
            console.log("It is an ARMSTRONG number");
        }
        else{
            console.log("It is  NOT an ARMSTRONG number");

         }
    }
// }

// amstTest(arr);