n=5
line=""
for (i=n;i>0;i--)
    {
  for(j=0;j<n-i;j++){
    line=line+" "
  }
  for(j=0;j<i;j++){
    line=line+"* "
  }
  console.log(line);
}