import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { checkNumber } from "./../src/roman-numeral.js";
import { getNumeral } from "./../src/roman-numeral.js";


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