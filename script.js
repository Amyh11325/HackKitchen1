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
function cook(step_s__p_) {
    document.body.append(step_s__p_);
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

//|||||
//function that counts down recursively
function countdown(n) {
    if(n==0){
        return "0!!!";
    } else{
        document.body.append(n);
        countdown(n-1);
    }
}

//|||||
//function that authenticates user
function authenticate(username, password){
    if(password == reverse(username)+"idiotsandwich"){
        location.href = 'cook.html';
    } else{
        "You idiot sandwich, that isn't the correct password!"
    }
}

//|||||
//function that returns a reverse string
function reverse(s){
    return s.split("").reverse().join("");
}