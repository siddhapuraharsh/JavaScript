function matchUp(a, b){
  let count = 0;
  for(let i=0; i<a.length; i++){
    if(Math.abs(a[i]-b[i])<2){
      count += 1;
    }
  }
  return count;
}