let a=[1,3,6,9,3,5]
let b=[]
for (i=0;i<a.length;i++){
    k=0
    for (j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            k=1
            break;
        }
    }
    if(k!=1){
        b.push(a[i])
    }

}
console.log(a);
console.log(b);