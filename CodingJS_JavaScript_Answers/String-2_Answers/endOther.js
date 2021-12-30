function endOther(a, b){
  let tempa = a.toLowerCase();
  let tempb = b.toLowerCase();
  let len = Math.min(a.length,b.length);
  
  if(tempa.slice(-len) === tempb.slice(-len)) return true;
  return false;
}