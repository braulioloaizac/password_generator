// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variable defined as global
var password = "";
var prevpass = "";

function generatePassword() {
  
  // Declaration of the possible characters string (the quotation sign requires the backslash to make it an escape character)
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var charsLenght = 26;
  var numbersChars = "0123456789";
  var numbersLenght = 10;
  var specialChars = " !\"#$%&'(\\)*+,-./:;<=>?@[]^_`{|}~";
  var specialCharsLenght = 33;
  

  // Asks about the password length
  var pwdLenghtstr = window.prompt("Enter the password lenght (number between 8 and 128)")
  
  // String to integer conversion
  var pwdLenght = parseInt(pwdLenghtstr);

  // Compares the entereed number
  if (pwdLenght >= 8 && pwdLenght <= 128){
    
    // Asks about the password propieties
    var upper = window.confirm("Do you want uppercase letters on your password?");
    var lower = window.confirm("Do you want lowercase letters on your password?");
    var numeric = window.confirm("Do you want numbers on your password?");
    var spechar = window.confirm("Do you want special characters on your password");
      //0001
      if ((upper===false)&&(lower===false)&&(numeric===false)&&(spechar===true)){
        var availableChars = specialChars;
        var avClenght = specialCharsLenght;
        password = passwordGenAuto(pwdLenght, availableChars, avClenght);

      }
      //0010
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===false)){
        var availableChars = numbersChars;
        var avClenght = numbersLenght;
        password = passwordGenAuto(pwdLenght, availableChars, avClenght);
      }
      //0011
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===true)){
        var availableChars = numbersChars.concat(specialChars);
        avClenght = numbersLenght + specialCharsLenght;
        password = passwordGenAuto(pwdLenght, availableChars, avClenght);
      }

      //0100
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===false)){
        var availableChars = lowerChars;
        avClenght = charsLenght;
        password = passwordGenAuto(pwdLenght, availableChars, avClenght);
      }

      //0101
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===true)){
        var availableChars = lowerChars.concat(specialChars);
        avClenght = charsLenght + specialCharsLenght;
        password = passwordGenAuto(pwdLenght, availableChars, avClenght);
      }

     //0110
     else if ((upper===false)&&(lower===true)&&(numeric===true)&&(spechar===false)){
      var availableChars = lowerChars.concat(numbersChars);
      avClenght = charsLenght + numbersLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    } 

    //0111
    else if ((upper===false)&&(lower===true)&&(numeric===true)&&(spechar===true)){
      var availableChars = lowerChars.concat(numbersChars,specialChars);
      avClenght = charsLenght + numbersLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    } 

    //1000
    else if ((upper===true)&&(lower===false)&&(numeric===false)&&(spechar===false)){
      var availableChars = upperChars;
      avClenght = charsLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    }

    //1001
    else if ((upper===true)&&(lower===false)&&(numeric===false)&&(spechar===true)){
      var availableChars = upperChars.concat(specialChars);
      avClenght = charsLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    }

    //1010
    else if ((upper===true)&&(lower===false)&&(numeric===true)&&(spechar===false)){
      var availableChars = upperChars.concat(numbersChars);
      avClenght = charsLenght + numbersLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    }

    //1011
    else if ((upper===true)&&(lower===false)&&(numeric===true)&&(spechar===true)){
      var availableChars = upperChars.concat(numbersChars,specialChars);
      avClenght = charsLenght + numbersLenght + specialCharsLenght;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    }

    //1100
    else if ((upper===true)&&(lower===true)&&(numeric===false)&&(spechar===false)){
      var availableChars = upperChars.concat(lowerChars);
      avClenght = charsLenght * 2;
      password = passwordGenAuto(pwdLenght, availableChars, avClenght);
    }
    
    else{
      window.alert("You didn't select a valid option 1");
    }

    }

    else{
      window.alert("You didn't select a valid option 2");
    }
    console.log(password);
  return;
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


function passwordGenAuto(pwdLenght, availableChars, avClenght){

  for (var i = 0; i<pwdLenght; i++){
          
    var numgen = getRndInteger(0,(avClenght-1));
    password = prevpass.concat(availableChars.charAt(numgen));
    
    prevpass = password;
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();