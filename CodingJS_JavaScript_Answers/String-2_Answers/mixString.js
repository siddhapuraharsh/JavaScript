function mixString(a, b){
  let minlen = Math.min(a.length,b.length);
  let ans = '';
  for(let i=0; i<minlen; i++)
  {
    ans += a[i]+b[i];
  }
  return ans + a.slice(minlen) + b.slice(minlen);
}