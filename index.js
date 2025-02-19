function validatePassword(a, b) {
  if (a !== b) {
      return false; //check first if the passwords match, if not return false immediately
  }

  if (a.length < 8) {
      return false; // check length of the password, if not 8 or more return false immediately
  }

  //to check for character requirements
  let hasLower = false;
  let hasUpper = false;
  let hasNumber = false;

  //loop through the string to check conditions
  for (let char of a) {
      if (!isNaN(char)) {
          hasNumber = true; //check if there is at least a number
      } else if (char === char.toUpperCase()) {
          hasUpper = true; //check if there is at least an uppercase
      } else if (char === char.toLowerCase()) {
          hasLower = true; //check if there is at least a lowercase
      }
      if (hasLower && hasUpper && hasNumber) {
          return true; //if all conditions are met retrun true
      }
  }

  return false; //return false if any condition is not met in the loop
}

function reversePassword(a) {
  var temp = a.split(""); //turn the string into an array of characters to use the built in function for later
  var reversed = temp.reverse(); //a built in function used in javascript for arrays
  var final = reversed.join("");

  return final;
}

function storePassword(name, pass1, pass2) {
  var valid = validatePassword(pass1, pass2);
  if(valid){
    var finalPass = reversePassword(pass1);
  } else {
    var finalPass = pass1;
  }

  const finalObject = {firstName:name, newpassword: finalPass};

  return finalObject;
}

// test run
// console.log(validatePassword("helloworld", "hello"));
// console.log(validatePassword("hello", "hello"));
// console.log(validatePassword("hello1234", "hello1234"));
// console.log(validatePassword("Hello1234", "Hello1234"));
// console.log(validatePassword("HELLO1234", "HELLO1234"));


console.log(reversePassword("hello"));

console.log(storePassword("Cleo", "Pass1234", "Pass1234"));
