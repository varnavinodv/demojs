let arr=[2,3,5,8,12,17]
large=arr[0]
for (i=0;i<=arr.length+1;i++){
   if (arr[i]>large){
    large=arr[i]
   }
}
console.log(large);