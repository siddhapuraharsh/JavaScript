function scores100(scores){
  if(scores.length==0) return false;
  
  if(scores[0]==100 && scores[0]==scores[1]) return true;
  else return scores100(scores.slice(1))
}