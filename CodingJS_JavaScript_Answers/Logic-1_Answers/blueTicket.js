function blueTicket(a, b, c){
  if(a+b==10 || b+c==10 || c+a==10) return 10;
  else if(a+b>=b+c+10 || a+b>=a+c+10) return 5;
  return 0;
}