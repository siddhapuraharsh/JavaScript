function scoreUp(key, answers){
  let marks = 0;
  
  for(let i=0; i<key.length; i++){
    if(key[i]==answers[i]) marks += 4;
    else if(key[i]!=answers[i] && answers[i]!='?') marks -= 1;
  }
  return marks;
}