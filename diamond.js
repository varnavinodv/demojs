n=5

k=1
for (i=1;i<=n;i++){
    line=""
    for(j=1;j<=n * 2 - 1;j++){
        if(j<=n - k / 2 || j >= n + k / 2 ){
            line=line+" "
        }
        else{
        line=line+"*"
        }
       
    }
    console.log(line);
    k=k+2
}
for (let i = n - 2; i >= 0; i--) {
    let line = "";
    for (let j = 0; j < n * 2 - 1; j++) {
        if (j >= n - 1 - i && j <= n - 1 + i) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}



let a=4
b=1
for(i=1;i<=a;i++){
    li=""
    for(j=1;j<=b;j++){
        if(j<=a-i ||j>=a+i){
            li=li+" "
        }
        else{
            li=li+"*"
        }
    }
    console.log(li);
    b=b+2

}