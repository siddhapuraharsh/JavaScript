function twoAsOne(a, b, c){
  if(a+b == c) return true;
  else if(b+c == a) return true;
  else if(c+a == b) return true;
  else return false;
}