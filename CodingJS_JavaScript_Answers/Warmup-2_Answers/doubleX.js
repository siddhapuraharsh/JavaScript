function doubleX(str){
  for(let i=0; i<=str.length; i++){
    if(str[i]=='x'){
      if(str[i+1]=='x'){
        return true;
      }
      else{
        return false;
      }
    }
  }
  return false;
}