function dividesSelf(n){
  temp = n;
  while(n!=0){
    if(parseInt(temp%(n%10))==0){
      n = parseInt(n/10);
    }
    else{
      return false;
    }
  }
  return true;
}   