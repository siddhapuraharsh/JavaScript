function makeBricks(small, big, goal){
  
  let digit = goal%10;
  
  if(goal > small+(big*5)){
    return false;
  }
  
  if (digit < 5 && small < digit){
    return false;
  }
  else if(digit>5 && digit>small+5){
    return false;
  }
  
  return true;
}