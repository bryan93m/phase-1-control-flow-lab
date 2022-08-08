function scuberGreetingForFeet(number){
  let result;
  if (number <= 400){
    result = 'This one is on me!';
  }
  else if (number > 400 && number < 2000){
    result = 'That will be twenty bucks.'
  }
  else if (number > 2000 && number < 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (number > 2500){
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city){
let result = (city == 'NYC') ? "Ok, sounds good." : "No go.";
return result;
}

function switchOnCharmFromTip(e){
 let result;
 switch(e){
  case 'generous':
    result = 'Thank you so much.';
    break;
  case 'not as generous':
    result = 'Thank you.';
    break;
  default:
    result = 'Bye.';
    break;
 }
 return result;
}