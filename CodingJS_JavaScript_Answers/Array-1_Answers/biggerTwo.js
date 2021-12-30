function biggerTwo(a, b){
  sum_a = a[0]+a[1];
  sum_b = b[0]+b[1];
  
  if(sum_a==sum_b) return a;
  else return sum_a<sum_b ? b:a ;
  
}