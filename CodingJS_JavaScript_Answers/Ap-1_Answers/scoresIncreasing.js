function scoresIncreasing(scores){
  let flag = false;
  
  for(let i=0; i<scores.length-1; i++){
    if(scores[i]<=scores[i+1]) flag=true;
    else return false;
  }
  return flag;
}