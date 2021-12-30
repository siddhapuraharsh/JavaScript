function oneTwo(str){
  let ans = '';
  
  for(let i=0; i<str.length-2; i+=3)
  {
    ans += str.substr(i+1,2) + str[i];
  }
  
  return ans;
}