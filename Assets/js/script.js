// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
  // Password variable defined as global
var password = "";
var prevpass = "";

  // Declaration of the possible characters string (the quotation sign requires the backslash to make it an escape character)
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var charsLength = 26;
  var numbersChars = "0123456789";
  var numbersLength = 10;
  var specialChars = " !\"#$%&'(\\)*+,-./:;<=>?@[]^_`{|}~";
  var specialCharsLength = 33;
  
  var availableChars = "";
  var avCLength = 0;

  // Asks about the password length
  var pwdLengthstr = window.prompt("Enter the password Length (number between 8 and 128)")
  
  // String to integer conversion
  var pwdLength = parseInt(pwdLengthstr);

  // Compares the entereed number
  if (pwdLength >= 8 && pwdLength <= 128){
    
    // Asks about the password propieties
    var upper = window.confirm("Do you want uppercase letters on your password?");
    var lower = window.confirm("Do you want lowercase letters on your password?");
    var numeric = window.confirm("Do you want numbers on your password?");
    var spechar = window.confirm("Do you want special characters on your password");

      //See the options that have been selected and adds it to the availableChars string, the same for the length
      if (upper===true){
        availableChars = availableChars.concat(upperChars);
        avCLength = avCLength + charsLength;
      }
      
      if(lower===true){
        availableChars = availableChars.concat(lowerChars);
        avCLength = avCLength + charsLength;
      }
      
      if(numeric===true){
        availableChars = availableChars.concat(numbersChars);
        avCLength = avCLength + numbersLength;
      }
      
      if(spechar===true){
        availableChars = availableChars.concat(specialChars);
        avCLength = avCLength + specialCharsLength;  
      }

    if((upper===false)&&(lower===false)&&(numbers===false)&&(spechar===false)){
      window.alert("You didn't select any option");
    }

    //Using the availableChars string and the length of it generates the password 
    for (var i = 0; i<pwdLength; i++){
      //Randomly generates a number between 0 and the lenght of the available string  
      var numgen = Math.floor(Math.random() * (avCLength-1));
      
      password = prevpass.concat(availableChars.charAt(numgen));
      
      prevpass = password;
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

