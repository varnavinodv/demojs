n="python"
let l=n.length
for(i=1;i<=l;i++){
    s=""
    for(j=0;j<i;j++){
    s=s+n[j]

    }
    for(j=i;j<l;j++){
       
            s=s+"*"
        
    }
    console.log(s);
}