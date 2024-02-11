const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const stripPunctuation = (str) => {
  const regex = /[^a-zA-Z0-9]/g
  return str.replace(regex, "").toLowerCase();
};

const checkPalindrome = () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
  } else {
    const strippedText = stripPunctuation(text);
    if (strippedText === strippedText.split("").reverse().join("")) {
      console.log(`${text} is a palindrome.`)
      resultDiv.textContent = `${text} is a palindrome.`
    } else {
      console.log(`${text} is not a palindrome.`)
      resultDiv.textContent = `${text} is not a palindrome.`
    }
  }

};

checkButton.addEventListener('click', checkPalindrome);
