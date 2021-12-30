function atFirst(str){
  if(str.length==0){
    return str+'@'+'@';   
  }
  else if(str.length==1){
    return str+'@';
  }
  else{
    return str.substr(0,2);
  }
}