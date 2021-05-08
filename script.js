var count = 0;
//------------------------------------------------------------------------------ <= 80 character limit

function startCooking() {
    count++
    var step_s_ = "";
    if (count == 1) {
        step_s_ = lemon();
    } else if (count == 2) {
        step_s_ = sugar();
    }
    
    cook(step_s_);
}

function cook(step) {
    document.body.append(step);
}

function lemon() {
    return "squeezing lemons";
}

function sugar() {
    return " mixing in sugar";
}