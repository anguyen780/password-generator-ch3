// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var totalChar = ''
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    var numbers = "1234567890";
    var symbols = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
    var generatedPassword = '';
    var passLength = prompt("How long would you like your password? Must be a number between 8-128");
    if ((parseInt(passLength) >= 8) && (parseInt(passLength) <= 128)){

    } 
    else {
        alert("Password length must be a number between 8-128");
        return '';
    }
    var confirmUpper = confirm('Would you like to include uppercase characters?');
    if (confirmUpper){
        totalChar = totalChar + upperChar;
    }
    var confirmLower = confirm('Would you like to include lowercase characters?');
    if (confirmLower){
        totalChar = totalChar + lowerChar;
    }
    var confirmNumber = confirm('Would you like to include numbers?');
    if (confirmNumber){
        totalChar = totalChar + numbers;
    }
    var confirmSymbol = confirm('Would you like to include symbols?');
    if (confirmSymbol){
        totalChar = totalChar + symbols;
    }
    for (var i = 0; i < parseInt(passLength); i++){
        var randomPass = totalChar[Math.floor(Math.random()*totalChar.length)];
        generatedPassword = generatedPassword + randomPass;
    }
    return generatedPassword;
}

