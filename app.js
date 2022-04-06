let equal_pressed = 0;
//Referenciando todos os buttons menos o AC e o DEL

let button_input = document.querySelectorAll(".input-button");
//Referenciando input, equal, clear and erase

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        
        input.value += button_class.value;
    });
});

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        
        let solution = eval(inp_val);
        
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        
        alert("Invalid Input");
    }
});

clear.addEventListener("click", () => {
    input.value = "";
});

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});