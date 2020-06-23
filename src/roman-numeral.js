function getNumeral (inputNumber) {
  let currentNumber = inputNumber;
  let currentNumeral = "";
  while (currentNumber > 0) {
    currentNumeral = currentNumeral + checkNumber(currentNumber)[1];
    currentNumber = checkNumber(currentNumber)[0];
  }
  return currentNumeral;
}

function checkNumber (inputNumber) {
  let numeralKey = [
    {"number":1000,"numeral":"M"},
    {"number":900,"numeral":"CM"},
    {"number":500,"numeral":"D"},
    {"number":400, "numeral":"CD"},
    {"number":100, "numeral":"C"},
    {"number":90, "numeral":"XC"},
    {"number":50, "numeral":"L"},
    {"number":40, "numeral":"XL"},
    {"number":10, "numeral":"X"},
    {"number":9, "numeral":"IX"},
    {"number":5, "numeral":"V"},
    {"number":4, "numeral":"IV"},
    {"number":1, "numeral":"I"}
  ];
  let outputNumber;
  let outputNumeral;
  for (i = 0; i < numeralKey.length; i++) {
  if (inputNumber >= numeralKey[i].number) {
    outputNumeral = numeralKey[i].numeral;
    outputNumber = inputNumber - numeralKey[i].number;
    return [outputNumber, outputNumeral];
    break;
    }
  }
}

$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    let inputNumber = parseInt($("#number").val());
    let outputNumeral = getNumeral(inputNumber);
    let regex = /^[0-9]*$/;
    if (regex.test(inputNumber) === true && inputNumber > 0 && inputNumber <= 3999){
      $("#result").text(outputNumeral);
    } else {
      $("#result").text("Please enter a number between 1 and 3999.");
    }
  });
}); 