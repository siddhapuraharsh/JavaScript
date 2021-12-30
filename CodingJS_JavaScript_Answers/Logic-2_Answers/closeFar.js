function closeFar(a, b, c){
  if(Math.abs(a-b)<=1 && Math.abs(a-c)>=2 && Math.abs(b-c)>=2) return true;
  if(Math.abs(a-c)<=1 && Math.abs(a-b)>=2 && Math.abs(b-c)>=2) return true;
  return false;
}