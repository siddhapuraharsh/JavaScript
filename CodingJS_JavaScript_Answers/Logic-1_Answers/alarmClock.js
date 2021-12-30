function alarmClock(day, vacation){
  
  if(vacation==true){
    if(day==0 || day==6){
      return 'off';
    }
    else{
      return '10:00';
    }
  }
  
  else{
    if(day>0 && day<=5){
      return '7:00';
    }
    else{
      return '10:00';
    }
  }
}