// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variable defined as global
var password = "";


function generatePassword() {
  
  // Declaration of the possible characters string (the quotation sign requires the backslash to make it an escape character)
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'(\\)*+,-./:;<=>?@[]^_`{|}~";
  // console.log(chars);
  
  //The alphabet has 26 letters * 2 plus 10 numbers and 33 special characters
  var charsLenght = 93;
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

      if ((upper===false)&&(lower===false)&&(numeric===false)&&(spechar===true)){
        for (var i = 0; i<pwdLenght; i++){
          
          var numgen = getRndInteger(61,charsLenght);
          
          password = prevpass.concat(chars.charAt(numgen));
          
          prevpass = password;
        }
      }

      // else if (option === [false,false,true,false]){
        
      // }

      // else if (option === [false,false,true,true]){
        
      // }
      // else if (option === [false,true,false,false]){
        
      // }
      // else if (option === [false,true,false,true]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }
      // else if (option === [false,false,false,false]){
        
      // }

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