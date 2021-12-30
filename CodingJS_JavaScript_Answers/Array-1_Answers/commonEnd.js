function commonEnd(a, b){
  len_a = a.length;
  len_b = b.length;
  
  if(a[0]==b[0] || a[len_a-1]==b[len_b-1]) return true;
  else return false;
}