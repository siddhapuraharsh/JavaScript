function stringSplosion(str){
  string = '';
  
  for(let i=1; i<str.length; i++){
    string += str.slice(0,i);
  }
  
  return string;
}