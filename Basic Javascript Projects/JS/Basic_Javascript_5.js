document.write(typeof 9);

function positive_Infinity() {
    document.write(2E310);
}

function negative_Infinity() {
    document.write(-2E310);
}

document.write(10>2);

document.write(10<2);

console.log(9+9);

document.write("10"+5);

document.write(34==34);

document.write(34==2);

x=9;
y=9;
document.write(x===y);

x=8;
y=9;
document.write(x===y);

x="9";
y=9;
document.write(x===y);

x="8"
y=9;
document.write(x===y);

document.write(1<2&&3<4);

document.write(1<2&&3>4);

document.write(5>6||7<8);

document.write(5>6||7>8);

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}

function not_Function() {
    document.getElementById("Not").innerHTML=!(20<10);
}