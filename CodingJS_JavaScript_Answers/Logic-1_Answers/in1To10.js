function in1To10(n, outsideMode){
  if(outsideMode){
    if(n<=1 || n>=10){
      return true;
    }
  }
  else if(n>=1 && n<=10){
    return true;
  }
  return false;
}