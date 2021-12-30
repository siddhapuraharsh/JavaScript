function strCount(str, sub){
  len = sub.length;
  
  if(str.length==0) return 0;
  
  if(str.substr(0,len)==sub) return 1+strCount(str.substr(len), sub);
  else return strCount(str.substr(1), sub);
}