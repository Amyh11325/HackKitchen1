var count = 0;
//------------------------------------------------------------------------------ <= 80 character limit

//|||||
//function that starts cooking and calls lemon or sugar
function startCooking() {
    count++
    var step_s__p_ = "";
    if (count == 1) {
        step_s__p_ = lemon();
    } else if (count == 2) {
        step_s__p_ = water();
    }else if (count == 3) {
        step_s__p_ = sugar();
    }else if (count == 4) {
        step_s__p_ = mix();
    }else if (count == 5) {
        step_s__p_ = lemonslice();
    }else if (count == 6) {
        step_s__p_ = umbrella();
    }else if (count == 7) {
        step_s__p_ = boil();
    }
    cook(step_s__p_);
}

//|||||
//function that adds to the step input
function cook(step) {
    document.body.append(step);
}

//|||||
//function that gets you lemon juice
function lemon() {
    return "squeezing lemons";
}

//|||||
//function that gets you lemon juice
function water() {
    return "adds in 2 cups of icy crisp water";
}

//|||||
//function that adds in sugar
function sugar() {
    return "adding a healthy dose of sugar";
}

//|||||
//function that mixes everything up
function mix() {
    return "mixing in sugar";
}

//|||||
//function that adds lemon aesthetic
function lemonslice() {
    return "adding a freshly cut lemon slice";
}

//|||||
//function that adds cute umbrella
function umbrella() {
    return "adding a cocktail umbrella to top things off!";
}

//|||||
//function that adds starts the hotpot
function boil() {
    return "whatever the first step is";
}