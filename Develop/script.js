// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variable defined as global
var password = "";


function generatePassword() {
  
  // Declaration of the possible characters string (the quotation sign requires the backslash to make it an escape character)
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //0 - 25
  var lowerChars = "abcdefghijklmnopqrstuvwxyz"; //0 - 25
  var numbers = "0123456789"; //0 - 9
  var specialChars = " !\"#$%&'(\\)*+,-./:;<=>?@[]^_`{|}~"; //0 - 32
  
  var prevpass = "";

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

        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(0,32);
          password = prevpass.concat(availableChars.charAt(numgen));
          
          prevpass = password;
        }
      }
      //0010
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===false)){
        var availableChars = numbers;

        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(0,9);
          password = prevpass.concat(availableChars.charAt(numgen));
          
          prevpass = password;
        }
      }
      //0011
      else if ((upper===false)&&(lower===false)&&(numeric===true)&&(spechar===true)){
        var availableChars = numbers.concat(specialChars);

        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(0,42);
          password = prevpass.concat(availableChars.charAt(numgen));
          
          prevpass = password;
        }
      }

      //0100
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===false)){
        var availableChars = lowerChars;

        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(0,25);
          password = prevpass.concat(availableChars.charAt(numgen));
        
          prevpass = password;
        }
      }

      //0101
      else if ((upper===false)&&(lower===true)&&(numeric===false)&&(spechar===true)){
        var availableChars = lowerChars.concat(specialChars);

        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(0,58);
          password = prevpass.concat(availableChars.charAt(numgen));
        
          prevpass = password;
        }
      }

     //0110
     else if ((upper===false)&&(lower===true)&&(numeric===true)&&(spechar===false)){
      var availableChars = lowerChars.concat(numeric);

      for (var i = 0; i<pwdLenght; i++){
        
        var numgen = getRndInteger(0,35);
        password = prevpass.concat(availableChars.charAt(numgen));
      
        prevpass = password;
      }
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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();