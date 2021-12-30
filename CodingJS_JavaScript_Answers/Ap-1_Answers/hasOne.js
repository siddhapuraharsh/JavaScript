function hasOne(n){
  if(n==0) return false;
  
  if(n%10==1) return true;
  else return hasOne(Math.floor(n/10));
}