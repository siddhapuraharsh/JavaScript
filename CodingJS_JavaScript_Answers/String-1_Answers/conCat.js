function conCat(a, b){
  if(a.slice(-1)==b[0]){
    return a+b.slice(1);
  }
  else{
    return a+b;
  }
}