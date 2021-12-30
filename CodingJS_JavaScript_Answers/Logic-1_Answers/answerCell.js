function answerCell(isMorning, isMom, isAsleep){
  if(isAsleep){
    return false;
  }
  else{
    if(isMorning){
      if(isMom){
        return true;
      }
      return false;
    }
    return true;
  }
}