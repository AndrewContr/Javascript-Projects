var X=51;
function Multiply_numbers_1() {
    document.write(X*17);
}
function Multiply_numbers_2() {
    document.write(X*2*4);
}
Multiply_numbers_1();
Multiply_numbers_2();

function Multiply_numbers_1() {
    var X=51;
    document.write(X*17);
}
function Multiply_numbers_2() {
    document.write(X*2*4);
}
Multiply_numbers_1();
Multiply_numbers_2();

function Multiply_numbers_1() {
    var Y=7;
    console.log(Y*17);
}
function Multiply_numbers_2() {
    console.log(Y*2*4);
}
Multiply_numbers_1();
Multiply_numbers_2();

function get_Date() {
    if (new Date().getHours() <11) {
        document.getElementById("Breakfast").innerHTML = "Breakfast is acceptable.";
    }
}

function smaller_Number() {
    if (80 < 81) {
        document.write("The number on the left is smaller than the number on the right.")
    }
}

function Name_Function() {
    Name = document.getElementById("Name").value;
    if (Name=="Steve") {
        Steve = "You are Steve.";
    }
    else {
        Steve = "You are not Steve.";
    }
    document.getElementById("Are_you_Steve?").innerHTML = Steve;
}

function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time>12==Time<18) {
        Reply="It is the afternoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}



