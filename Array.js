a=[25,100,60,36,60]

t=0
for(let i=0;i<=a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            t=a[i]
            a[i]=a[j]
            a[j]=t
        }
    }
}
console.log(a);
for(let i=0;i<=a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            t=a[i]
            a[i]=a[j]
            a[j]=t
        }
    }
}
console.log(a);
//spliting
b=[2,3,8,1,5,6,9,4]
one=b.slice(0,b.length/2)
two=b.slice(b.length/2)
console.log('-----',one);
console.log('----',two);
console.log('-----------------------------------');
//one in asc
l=one.length
t=0
for (i=0;i<=l;i++){
    for(j=i+1;j<=l;j++){
        if(one[i]>one[j]){
        t=one[i]
        one[i]=one[j]
        one[j]=t
        }
    }
}
console.log('one in asc',one);
//two in asc
s=two.length
t=0
for (i=0;i<=s;i++){
    for(j=i+1;j<=s;j++){
        if(two[i]<two[j]){
            t=two[i]
            two[i]=two[j]
            two[j]=t
            }
    }
}
console.log('two in asc',two);
let three= one.concat(two)
console.log(three);
index=2
if (index !== -1) {
    three.splice(index, 1);
    }
console.log(three);
// delete three[2]
// console.log(three);

//sum 10
arr=[2,6,8,3,7,9,1,4]
for(i=0;i<=arr.length;i++){
    b=[]
    for(j=i+1;j<=arr.length;j++){
        if(arr[i]+arr[j]==10){
            b.push(arr[i])
            b.push(arr[j])
            console.log(b);

        }
    
    }
    
}
//---unique
a1=[2,3,4,5,2,7,4,5]
a2=[]
for(i=0;i<=a1.length;i++){
    k=0
    for(j=0;j<=a2.length;j++){
        if(a1[i]==a2[j]){
     k=1
        }
    }
    if(k==0){
        a2.push(a1[i])

    }

}
console.log('a22222222222',a2);


//---repeat
a1=[2,3,4,5,2,7,4,5]
a2=[]
for(i=0;i<=a1.length;i++){
    k=0
    for(j=i+1;j<=a1.length;j++){
        if(a1[i]==a1[j]){
     k=1
        }
    }
    if(k==1){
        a2.push(a1[i])

    }

}
console.log('repeat',a2);