// const arr1=[4,8,9,10,12,15,80,90,95,97,99],arr2=[20,30,40,45,65,80,82,85,87,88,92];
const arr1=[1,2],arr2=[3,4];
let leftIndex1=0;rightIndex1=arr1.length-1;
let leftIndex2=0;rightIndex2=arr2.length-1;


while((leftIndex1<rightIndex1) && (leftIndex2<rightIndex2)){
mid1=Math.floor((leftIndex1+rightIndex1)/2);
mid2=Math.floor((leftIndex2+rightIndex2)/2);
if(leftIndex1==mid1 || rightIndex1==mid1 || leftIndex2==mid2 || rightIndex2==mid2){
    break;
}
if(arr1[mid1]<arr2[mid2]){
    rightIndex2=mid2;
    leftIndex1=mid1;
}
else{
    rightIndex1=mid1;
    leftIndex2=mid2;
}
}


let elementInfirstarray = rightIndex1-leftIndex1+1;
let elementInSecondArray = rightIndex2-leftIndex2+1;

let lethgthOfNewArray = elementInSecondArray+elementInfirstarray;
var arr = new Array(lethgthOfNewArray);
let k = 0;
while(leftIndex1<rightIndex1){
    if(arr1[leftIndex1] < arr2[leftIndex2]){
        arr[k++] = arr1[leftIndex1++];
    }else{
        arr[k++] = arr2[leftIndex2++];
    }

}

while(leftIndex2<rightIndex2){
    if(arr2[leftIndex2] < arr1[leftIndex1]){
        arr[k++] = arr2[leftIndex2++];
    }else{
        arr[k++] = arr1[leftIndex1++]
    }
}

if(leftIndex1==rightIndex1){
    arr[k++] = arr1[leftIndex1];
}
if(leftIndex2==rightIndex2){
    arr[k++] = arr2[leftIndex2];
}

let mid = Math.floor((0+arr.length-1)/2);
console.log(arr[mid]);







