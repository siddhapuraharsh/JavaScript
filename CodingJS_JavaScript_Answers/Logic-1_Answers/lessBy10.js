function lessBy10(a, b, c){
  if(Math.abs(a-b)>=10 || Math.abs(b-c)>=10 || Math.abs(c-a)>=10){
    return true;
  }
  return false;
}