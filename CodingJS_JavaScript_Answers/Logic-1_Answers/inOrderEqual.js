function inOrderEqual(a, b, c, equalOk){
  if(equalOk){
    if(a<=b && b<=c) return true;
    else return false; 
  }
  else{
    if(a<b && b<c) return true;
    else return false;
  }
}