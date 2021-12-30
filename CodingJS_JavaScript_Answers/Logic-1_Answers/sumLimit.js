function sumLimit(a, b){
  len_a = (a.toString()).length;
  len_sum = ((a+b).toString()).length;
  
  if(len_a==len_sum) return a+b;
  else if(len_a<=len_sum) return a;
}