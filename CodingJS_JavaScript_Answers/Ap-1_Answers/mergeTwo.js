function mergeTwo(a, b, n){
  res = [];
  a_index = 0;
  b_index = 0;
  for(let i=0; i<n; i++){
    if(a[a_index]<b[b_index]){
      res.push(a[a_index]);
      a_index += 1;
    }
    else if(a[a_index]==b[b_index]){
      res.push(a[a_index]);
      a_index += 1;
      b_index += 1;
    }
    else{
      res.push(b[b_index]);
      b_index += 1;
    }
  }
  return res;
}