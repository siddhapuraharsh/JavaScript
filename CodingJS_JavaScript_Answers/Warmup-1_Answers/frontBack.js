function frontBack(str){
  len = str.length
  if(len>1){
    return str[len-1] + str.slice(1,len-1) + str[0];
  }
  else{
    return str;
  }
}