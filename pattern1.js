n=5

for(i=1;i<=n;i++){
    line=""
    for(j=1;j<=i;j++){
    line=line+j
}
let x=2*(n-i)
for(j=0;j<x;j++){
    line=line+"*"
}
for(j=i;j>=1;j--){
    line=line+j
}

console.log(line);

}
