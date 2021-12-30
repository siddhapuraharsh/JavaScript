function loneTeen(a, b){
  let count = 0;
  
  if(a>=13 && a<=19){
    count++;
  }
  
  if(b>=13 && b<=19){
    count++
  }
  
  if(count<2 && count>0){
    return true;
  }
  else{
    return false;
  }
}