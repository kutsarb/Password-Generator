// Assignment Code
var generateBtn = document.querySelector("#generate");
var nextBtn = document.querySelector("#next");
var backBtn = document.querySelector("#back");
var password = document.querySelector(".password");
var input = document.querySelector(".input");
var genPass = [];
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];;
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];
var gen2 = document.getElementById("generate2")
var passwordLength
var lowercase;
var uppercase;
var numbers;
var specials;
var newOne



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var x = document.getElementById("generate");
  if (x.style.display === "none") {
    x.style.display = "hide";
  } else {
    x.style.display = "none";
  }

  nextBtn.style.display = "initial";

  input.style.display = "initial";

  password.textContent = "How many characters should your password have? (8-128)";

  writePassword()

});





function writePassword() {


  console.log(document.querySelector("textArea").value)
  var textArea = document.querySelector("p");
  textArea.textContent = "";
  textArea.textContent += "Choose how many characters long you'd like your password to be (between 8-128 characters)";

  nextBtn.addEventListener("click", function length() {
    if (document.querySelector("textArea").value < 8) {
      alert("Password length must be a number between 8-128 characters");
      passLength();
    } else if (document.querySelector("textArea").value > 128) {
      alert("Password length must be a number between 8-128 characters");
      passLength();
    } else if (isNaN(document.querySelector("textArea").value)) {
      alert("Password length must be a number between 8-128 characters");
      passLength();
    } else {
      passwordLength = document.querySelector("textArea").value
      console.log(document.querySelector("textArea").value)
      specChar()
    }

    return passwordLength;


    function specChar() {
      var textArea = document.querySelector("p");
      var checks = document.getElementById("checks");
      var gen2 = document.getElementById("generate2")
      textArea.textContent = "";
      textArea.textContent += "Select all options you would like included in your password";

      input.style.display = "none"

      checks.style.display = "initial"

      nextBtn.style.display = "none";

      gen2.style.display = "initial"

    };


  });
  gen2.addEventListener("click", function genPass() {
    generateChoicesArray()
    specialCharsCheckbox = document.getElementsByName("specialChars")[0].checked;
    numbersCheckbox = document.getElementsByName("numbers")[0].checked;
    lowerCheckbox = document.getElementsByName("lower")[0].checked;
    upperCheckbox = document.getElementsByName("upper")[0].checked;

    console.log(specialCharsCheckbox, numbersCheckbox, lowerCheckbox, upperCheckbox)

    if (lowerCheckbox == false && upperCheckbox == false && numbersCheckbox == false && specialCharsCheckbox == false) {
      alert("You must select at least one checbox!")
    }

  });
}

var slections = [];

function generateChoicesArray() {

  specialCharsCheckbox = document.getElementsByName("specialChars")[0].checked;
  numbersCheckbox = document.getElementsByName("numbers")[0].checked;
  lowerCheckbox = document.getElementsByName("lower")[0].checked;
  upperCheckbox = document.getElementsByName("upper")[0].checked;

  if (specialCharsCheckbox == true)
    slections = slections.concat(specialChar);
  if (numbersCheckbox == true)
    slections = slections.concat(numberChar);
  if (lowerCheckbox == true)
    slections = slections.concat(lowercaseChar);
  if (upperCheckbox == true)
    slections = slections.concat(uppercaseChar);
  console.log(slections)
  generateNewPassword()
};


function generateNewPassword() {
  var textArea = document.querySelector("p");
  var h2 = document.querySelector("h2")
  checks.style.display = "none"
  textArea.textContent = "";
  h2.textContent = "Your New Password!"

  if (slections.length < numberChar.length || passwordLength < 8) {
    alert("You did not meet the minimum standard ")
  } else {
    for (i = 0; i < passwordLength; i++) {
      genPass += slections[Math.floor(Math.random() * (slections.length - 1))];
    }
    textArea.textContent = genPass;

  };
  genPass = []
  console.log(genPass)
}