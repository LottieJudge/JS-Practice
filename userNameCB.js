
function CodelandUsernameValidation(str){ 
  let validChars =  /^[A-Za-z0-9_]*$/.test(str)
  let validUser = false
  if(validChars && str.length > 3 && str.length < 24){
      validUser = true
    } 
    return validUser
  };

console.log(CodelandUsernameValidation('a__'))