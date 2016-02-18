// $(document).ready(function() {
//     //we need to calc the formula
//     var button = document.getElementsByClassName('form__submit');
//     var input = document.getElementsByClassName('form__input');
//     var select = document.getElementsByClassName('form__select')[0];
//
//     function metersCalc(input){
//         var val = (input * 0.003);
//         val = val*1000;
//         return val
//     };
//     function feetCalc(input){
//         var val = (input * 0.0104166);
//         val = val * 28.3168;
//         return val
//     };
//
//     function btnHandler(){
//         console.log("Help");
//         if (input.value === ""){
//             alert("Please enter a value in the first form field!");
//             button.className = "col-sm-4 form__submit btn btn-danger";
//         } else {
//             var val = input.value;
//             var selectval = select.options[select.selectedIndex].value;
//             if(selectval === "meters"){
//                 //we want to use the meters formula
//                 document.getElementsByClassName('results')[0].innerHTML = metersCalc(val);
//                 button.className = "col-sm-4 form__submit btn btn-success";
//             } else if (selectval === "feet") {
//                 document.getElementsByClassName('results')[0].innerHTML = feetCalc(val);
//                 button.className = "col-sm-4 form__submit btn btn-success";
//             }
//         }
//     }
//
// });
function metersCalc(input){
    input = input.toFixed(100);
    var val = (input * 0.003);
    val = val*1000;
    console.log(val);
    return val
};
function feetCalc(input){
    var val = (input * 0.0104166);
    val = val * 28.3168;
    return val
};

function btnHandler(){
    console.log("Help");
    var button = document.getElementsByClassName('form__submit');
    var input = document.getElementsByClassName('form__input');
    var select = document.getElementsByClassName('form__select')[0];
    if (input.value === undefined){
        alert("Please enter a value in the first form field!");
        button.className = "col-sm-4 form__submit btn btn-danger";
    } else {
        var val = input.value;
        var selectval = select.options[select.selectedIndex].value;
        if(selectval === "meters"){
            //we want to use the meters formula
            document.getElementsByClassName('results')[0].innerHTML = metersCalc(val);
            button.className = "col-sm-4 form__submit btn btn-success";
        } else if (selectval === "feet") {
            document.getElementsByClassName('results')[0].innerHTML = feetCalc(val);
            button.className = "col-sm-4 form__submit btn btn-success";
        }
    }
}
