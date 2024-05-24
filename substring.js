a="helloworld"
b="wld"
l1=a.length
l2=b.length
s=0;
for (i=0;i<=l1-l2;i++){
    k=0
    for(j=0;j<l2;j++){
        if(a[i+j]!=b[j]){
            k=1
            break;

        }
    }
    if(k==0){
        console.log("substring");
        s=1
        break;
    }
    
}
if(s==0){
    console.log("not");
}