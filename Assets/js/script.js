// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variable defined as global
var password = "";
var prevpass = "";

function generatePassword() {
  
  // Declaration of the possible characters string (the quotation sign requires the backslash to make it an escape character)
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numbersChars = "0123456789";
  var specialChars = " !\"#$%&'(\\)*+,-./:;<=>?@[]^_`{|}~";
  
  //Length of the strings
  var charsLenght = 26;
  var numbersLenght = 10;
  var specialCharsLenght = 33;
  

  // Asks about the password length
  var pwdLengthstr = window.prompt("Enter the password lenght (number between 8 and 128)")
  
  // String to integer conversion
  var pwdLength = parseInt(pwdLengthstr);

  // Compares the entereed number
  if (pwdLength >= 8 && pwdLength <= 128){
    
    // Asks about the password propieties
    var upper = window.confirm("Do you want uppercase letters on your password?");
    var lower = window.confirm("Do you want lowercase letters on your password?");
    var numeric = window.confirm("Do you want numbers on your password?");
    var spechar = window.confirm("Do you want special characters on your password");

      //0001
      if ((upper===false)&&(lower===false)&&(numeric===false)&&(spechar===true)){
        var availableChars = specialChars;
        var avClenght = specialCharsLenght;
        password = passwordGenAuto(pwdLength, availableChars, avClenght);
      }
      //0010
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===false)){
        var availableChars = numbersChars;
        var avClenght = numbersLenght;
        password = passwordGenAuto(pwdLength, availableChars, avClenght);
      }
      //0011
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===true)){
        var availableChars = numbersChars.concat(specialChars);
        avClenght = numbersLenght + specialCharsLenght;
        password = passwordGenAuto(pwdLength, availableChars, avClenght);
      }

      //0100
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===false)){
        var availableChars = lowerChars;
        avClenght = charsLenght;
        password = passwordGenAuto(pwdLength, availableChars, avClenght);
      }

      //0101
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===true)){
        var availableChars = lowerChars.concat(specialChars);
        avClenght = charsLenght + specialCharsLenght;
        password = passwordGenAuto(pwdLength, availableChars, avClenght);
      }

     //0110
     else if ((upper===false)&&(lower===true)&&(numeric===true)&&(spechar===false)){
      var availableChars = lowerChars.concat(numbersChars);
      avClenght = charsLenght + numbersLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    } 

    //0111
    else if ((upper===false)&&(lower===true)&&(numeric===true)&&(spechar===true)){
      var availableChars = lowerChars.concat(numbersChars,specialChars);
      avClenght = charsLenght + numbersLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    } 

    //1000
    else if ((upper===true)&&(lower===false)&&(numeric===false)&&(spechar===false)){
      var availableChars = upperChars;
      avClenght = charsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1001
    else if ((upper===true)&&(lower===false)&&(numeric===false)&&(spechar===true)){
      var availableChars = upperChars.concat(specialChars);
      avClenght = charsLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1010
    else if ((upper===true)&&(lower===false)&&(numeric===true)&&(spechar===false)){
      var availableChars = upperChars.concat(numbersChars);
      avClenght = charsLenght + numbersLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1011
    else if ((upper===true)&&(lower===false)&&(numeric===true)&&(spechar===true)){
      var availableChars = upperChars.concat(numbersChars,specialChars);
      avClenght = charsLenght + numbersLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1100
    else if ((upper===true)&&(lower===true)&&(numeric===false)&&(spechar===false)){
      var availableChars = upperChars.concat(lowerChars);
      avClenght = charsLenght * 2;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1101
    else if ((upper===true)&&(lower===true)&&(numeric===false)&&(spechar===true)){
      var availableChars = upperChars.concat(lowerChars,specialChars);
      avClenght = (charsLenght * 2) + specialCharsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1110
    else if ((upper===true)&&(lower===true)&&(numeric===true)&&(spechar===false)){
      var availableChars = upperChars.concat(lowerChars,numbersChars);
      avClenght = (charsLenght * 2) + numbersLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    //1111
    else if ((upper===true)&&(lower===true)&&(numeric===true)&&(spechar===true)){
      var availableChars = upperChars.concat(lowerChars,numbersChars, specialChars);
      avClenght = (charsLenght * 2) + numbersLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLength, availableChars, avClenght);
    }

    else{
      window.alert("You didn't select any option");
    }
  }

  else{
    window.alert("You didn't select a valid option");
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Num generator
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Generates the password using the available chars depending on the case
function passwordGenAuto(pwdLength, availableChars, avClenght){

  for (var i = 0; i<pwdLength; i++){
    //Executes the random number generator function       
    var numgen = getRndInteger(0,(avClenght-1));
    //Adds a new character to the previous set of characters
    password = prevpass.concat(availableChars.charAt(numgen));
    //Updates the prevpass variable with the new string
    prevpass = password;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

