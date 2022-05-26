# Password Generator

For this project the main objective is the creation of a password generator using Javascript in which when you push the generate button a prompt window appears and asks you the length of it, it can't be less than 8 characters and greater than 128 characters, also the prompt will ask you if you want to include uppercase letters, lowercase letters, numbers and/or special characters. Then, the password is randomly generated and displayed to the user.

## Logic Behind the Code

First we have to ask the user the length of the password that wants to be generated, if the user enters a number less than 8 or greater than 128 the script will end and a window will be showed to the user telling him that he didn't select a valid option, if the user enters a number in that range the script will continue his excecution.

For the next step we have to ask the user if he wants to include uppercase letters, lowercase letters, numbers or special signs and with that in mind the script have to randomly generate a password, to represent the possible combinatons, i used 4 bit combinations being each one an option set by the user i.e: if the user wants uppercase letters and special signs the combination will be 1001, if the user wants the four options the combination will be 1111, giving a total of 15 cases plus one that is accessed when the user doesn't select any option in this case a new window will appear saying that the user didn´t select any options.

Inside every case, we have three variables : availableChars, avClength, and a function execution. The first one takes a string of existing characters (created at the beginning, there is four in total) that contains the possible characters of each option and depending on each case it creates a new string (adding more strings if it's necessary) that is going to be the string from the one we choose the random characters using a random number generator function and the method charAt() that selects one letter or character giving it's position. The random generator number function has one parameter and is the length of the current available string to stablish the limits of the random generated number, we use Math.floor() over the Math.random() method to approximate the numbers just because there's no position i.e 1.3 inside the string.

### The password Generator Auto Function

As i said before, the last variable executes a function and that function is randomGenAuto, the function has two parameters: the available string and the length of that string, the purpose of that function is generate the password using the for loop (the loops depends directly of the characters that the user wants in his password). In each loop, we're going to get one character of the function, and it's going to be added to the previous password through the prevpass variable.
