let n=153
let num=n
temp=0
while(n!=0){
    r=n%10
    temp=temp+r*r*r
    n=Math.floor(n/10)
}
if(temp==num){
    console.log("arm");

}
else{
    console.log("not");
}