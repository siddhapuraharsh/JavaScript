function roundSum(a, b, c){
  return round10(a) + round10(b) + round10(c)
}

function round10(num){
  if(num%10 >= 5) return (num-(num%10))+10;
  else return num-(num%10);
}