function lastTwo(str){
  n = str.length;
  if(n<2){
    return str;
  }
  else{
    return str.slice(0,n-2)+str[n-1]+str[n-2];
  }
}