let a=[9,2,3,1,4,3]
for (i=0;i<a.length;i++){
    for (j=i+1;j<a.length;j++)
    if(a[i]<a[j]){
        temp=a[i]
        a[i]=a[j]
        a[j]=temp
    }
   
}
console.log(a);
