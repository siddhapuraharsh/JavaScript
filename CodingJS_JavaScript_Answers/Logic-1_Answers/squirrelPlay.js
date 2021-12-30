function squirrelPlay(temp, isSummer){
  
  if(temp>=60 && temp<=100 && isSummer==true){
    return true;
  }
  else if(temp>=60 && temp<=90 && isSummer==false){
    return true;
  }
  else{
    return false;
  }
}