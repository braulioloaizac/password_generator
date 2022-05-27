# Password Generator

For this project the main objective is the creation of a password generator using Javascript in which when you push the generate button a prompt window appears and asks you the length of it, it can't be less than 8 characters and greater than 128 characters, also the prompt will ask you if you want to include uppercase letters, lowercase letters, numbers and/or special characters. Then, the password is randomly generated and displayed to the user.

## Logic Behind the Code

First we have to ask the user the length of the password that wants to be generated, if the user enters a number less than 8 or greater than 128 the script will end and a window will be showed to the user telling him that he didn't select a valid option, if the user enters a number in that range the script will continue his excecution.

For the next step we have to ask the user if he wants to include uppercase letters, lowercase letters, numbers or special signs and with that in mind the script have to randomly generate a password. For that i compare each option and if it´s true, the option characters set will be added to the available string and the length will be added to the length of that string.

With the available string and the length of that string, i generate the password using the for loop (the loops depends directly of the characters that the user wants in his password). In each loop, i'm going to get one character of the password, and it's going to be added to the previous password characters through the prevpass variable.

I used the method charAt() that selects one letter or character giving it's position to generate the password, i used Math.floor() over the Math.random() method to approximate the numbers just because there's no position 1.3 inside the string.


Here's a little sneak peak of the webApp:
![alt text](./Screenshot%202022-05-26%20162252.png "snapshot")
