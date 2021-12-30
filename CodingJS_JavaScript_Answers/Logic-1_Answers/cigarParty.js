function cigarParty(cigars, isWeekend){
  
  if(isWeekend){
    if(cigars>39){
      return true;
    }
    return false;
  }
  
  else{
    if(cigars>39 && cigars<61){
      return true;
    }
    return false;
  }
}