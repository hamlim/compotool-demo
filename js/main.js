$(document).ready(function() {
    //we need to calc the formula
    var button = document.getElementsByClassName('form__submit');
    var input = document.getElementsByClassName('form__input');
    var select = document.getElementsByClassName('form__select')[0];

    button.onclick = function() {
        //lets determine the val
        if (input.value === ""){
            alert("Please enter a value in the first form field!");
        } else {
            var val = input.value;
            var selectval = select.value;
        }
    }

});
