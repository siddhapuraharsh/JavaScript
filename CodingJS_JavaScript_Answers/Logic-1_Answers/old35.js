function old35(n){
  if(n%3==0 && n%5==0){
    return false;
  }
  else if(n%3==0 || n%5==0){
    return true;
  }
}