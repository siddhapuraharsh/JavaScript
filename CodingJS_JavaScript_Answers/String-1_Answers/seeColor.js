function seeColor(str){
  
  if(str.slice(0,3)=='red'){
    return 'red';
  }
  
  if(str.slice(0,4)=='blue'){
    return 'blue';
  }
  
  else{
    return '';
  }
}