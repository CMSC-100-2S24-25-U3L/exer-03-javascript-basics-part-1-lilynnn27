function validatePassword(a, b) {
  isValid = true;

  while (isValid) {
    if (a !== b) {
      isValid = false; //check first if a and b are equal/matching
    }

    if (a.length < 8) {
      isValid = false; //check the length
    }

    if (a.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
      isValid = isValid; //retain isValid
    } else {
      isValid = false; //check if the string has numbers
    }

    if (a == a.toUpperCase()) {
      isValid = false; //check if the string has all uppercase letters
    }

    if (a == a.toLowerCase()) {
      isValid = false; //check if the string has all lowercase letters
    }

    //by the end of these if statements, all cases would be already covered
  }

  return isValid; //will return whatever value the isValid is storing;
  //will be true by default if it went through the if statements without satisfying a condition
}

function reversePassword() {}

function storePassword() {}

console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));
