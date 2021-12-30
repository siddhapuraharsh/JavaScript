function max1020(a, b){
  let temp_a = a
  let temp_b = b
  
  if(a>20 || a<10){
    temp_a = 0;
  }
  if(b>20 || b<10){
    temp_b = 0;
  }
  
  if(temp_a>=temp_b){
    return temp_a;
  }
  else{
    return temp_b;
  }
}