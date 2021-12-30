function blackjack(a, b){
  if(a<=21 && b<=21) return Math.abs(a-21)<Math.abs(b-21) ? a:b;
  if(a>21 && b>21) return 0;
  
  if(a>21) return b;
  else return a;
}