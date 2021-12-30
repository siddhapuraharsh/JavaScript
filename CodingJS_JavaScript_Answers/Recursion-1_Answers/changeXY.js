function changeXY(str){
  if(str.length==0) return '';
  
  if(str[0]=='x') return 'y'+changeXY(str.slice(1));
  else return str[0]+changeXY(str.slice(1));
}