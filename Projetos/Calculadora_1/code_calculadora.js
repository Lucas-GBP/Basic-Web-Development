/* Constants*/
//Calculator Screen
const cal_screen = document.getElementById("cal-screen");
//Caclulator Number Buttons
const number_buttons = [
    document.getElementById("cal-button-0"),
    document.getElementById("cal-button-1"),
    document.getElementById("cal-button-2"),
    document.getElementById("cal-button-3"),
    document.getElementById("cal-button-4"),
    document.getElementById("cal-button-5"),
    document.getElementById("cal-button-6"),
    document.getElementById("cal-button-7"),
    document.getElementById("cal-button-8"),
    document.getElementById("cal-button-9"),
];
//Calculator Function Numbers
const button_dot = document.getElementById("cal-button-dot");
const equal_button = document.getElementById("cal-button-=");
const plus_button  = document.getElementById("cal-button-plus");
const minus_button  = document.getElementById("cal-button-minus");
const mult_button  = document.getElementById("cal-button-X");
const div_button  = document.getElementById("cal-button-/");

/*Varibles*/

var calculator_state = 0;
    const input_1 = 0;
    const select_operation = 1;
    const input_2 = 2;
    const result = 3;

var calculator_operator = 0;
    const Equal = 0;
    const Sum = 1;
    const Sub = 2;
    const Mult = 3;
    const Divi = 4;
    const None = 5;

let first_number = 0;
let second_number = 0;
//let result = 0;

function add_value_to_screen(value) {
    if(calculator_state == result){
        calculator_state = input_1;
        cal_screen.innerHTML = value;

        return
    }
    if(calculator_state == select_operation){
        calculator_state = input_2;
        cal_screen.innerHTML = value;

        return;
    }

    //console.log(calculator_state+""+calculator_operator);
    cal_screen.innerHTML += value;
}

function calculate_result(){
    calculator_state = result;
    second_number = parseFloat(cal_screen.innerHTML);

    switch (calculator_operator) {
    case Sum:
        first_number = first_number + second_number;
        break;
    case Sub:
        first_number = first_number - second_number;
        break;
    case Mult:
        first_number = first_number * second_number;
        break;
    case Divi:
        first_number = first_number / second_number;
        break;
    }
    calculator_operator = None;

    cal_screen.innerHTML = first_number;
}

function change_operation(operation){

    if(operation == Equal){
        if(calculator_state == select_operation){
            calculate_result();
            return;
        }
        if(calculator_state == input_2){
            calculate_result();
            return;
        }
    }
    if(operation != Equal){
        if(calculator_state == input_1){
            calculator_state = select_operation;
            calculator_operator = operation;
            first_number = parseFloat(cal_screen.innerHTML)
            return;
        }
        if(calculator_state == select_operation){
            calculator_operator = operation;
            return;
        }
        if(calculator_state == input_2){
            calculator_operator = operation;
            return;
        }
        if(calculator_state == result){
            calculator_state = input_2;
            calculator_operator = operation;
            cal_screen.innerHTML = "";
            return;
        }
    }
}

for(let i = 0; i < 10; i++){
    number_buttons[i].onclick = function (){add_value_to_screen(i);}
}
button_dot.onclick = function (){add_value_to_screen(".")}
equal_button.onclick = function (){change_operation(Equal)};
plus_button.onclick = function (){change_operation(Sum)};
minus_button.onclick = function (){change_operation(Sub)};
mult_button.onclick = function (){change_operation(Mult)};
div_button.onclick = function (){change_operation(Divi)};