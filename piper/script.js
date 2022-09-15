function peak(arr){
   if (!(arr.length-2)) {return (arr[0]-arr[1])?-1:1};
   let ind=arr.length % 2 +1;
   let sum=arr.reduce((a,b)=>a+b);
   let leftSum=0;
   for(let i=0;i<=arr.length-2;i++){
leftSum+=arr[i];
let rightSum=sum-leftSum;
if (rightSum==leftSum || rightSum==leftSum-arr[i+1]*ind ) return i+1

   }
   return -1;
  }
  
  console.log (peak([4,6,4,10,4]));