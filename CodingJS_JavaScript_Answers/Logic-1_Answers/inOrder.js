function inOrder(a, b, c, bOk){
  if(bOk){
    if(b<c) return true;
    else return false; 
  }
  else{
    if(a<b && b<c) return true;
    else return false;
  }
}