str='abcopqgha'
// for(i=0;i<str.length;i++){
//     for(j=i+1;j<str.length;j++){
//     if(str[i]>str[j]){
//         s=str[i]
       
//         str[i]=str[j]
//         str[j]=s
//     }
// }
// }
let l=str.split('').sort().join('')
console.log(l);
//remove repeat
let str1 = 'Hello';
let newstr=''

for (let i = 0; i < str1.length; i++) {
    k=0
    for(j=0;j<newstr.length;j++){
        if(str1[i]==newstr[j]){
           k=1
           break
        }
    }
    if(k==0){
         newstr = newstr + str1[i]
    }
    }
console.log(newstr);

let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result);

let text1 = "How are you doing today?";
const myArray = text1.split(" ");
console.log(myArray);

//reverse
k="varna"
let g=k.split('').reverse().join('')
console.log(g);

//dec str
x="punnya"
y=x.split('')
t=0
for(let i=0;i<=y.length;i++){
    for(let j=i+1;j<=y.length;j++){
        if(y[i]<y[j]){
            t=y[i]
            y[i]=y[j]
            y[j]=t
        }
    }
}
z=y.join('')
console.log(z);