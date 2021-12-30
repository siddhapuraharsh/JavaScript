function scoresSpecial(a, b){
  let max_a = score_max(a);
  let max_b = score_max(b);
  return max_a+max_b;
}

function score_max(arr){
  let temp = 0;
  
  for(let i=0; i<arr.length; i++){
    if((arr[i]%10 == 0) && (arr[i]>temp)){
      temp = arr[i];
    }
  }
  return temp;
}