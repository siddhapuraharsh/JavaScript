function make2(a, b){
  len = a.length;
  if(len==0) return [b[0],b[1]];
  else if(len==1) return [a[0],b[0]];
  else return [a[0],a[1]];
}