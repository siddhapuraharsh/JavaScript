function withoutX(str){
  len = str.length;
  if(str[0]=='x' && str[len-1]=='x'){
    return str.slice(1,len-1);
  }
  
  else if(str[0]=='x'){
    return str.slice(1);
  }
  
  else if(str[len-1]=='x'){
    return str.slice(0,len-1);
  }
  
  else{
    return str;
  }
}