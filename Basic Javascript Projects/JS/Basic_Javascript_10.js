function Call_Loop() {
    var Digit="";
    var X=10;
    while (X<100) {
        Digit += "<br>" +X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments=["Theremin", "Keytar", "Zither", "Washboard", "Cat Organ", "Sarrusophone", "Didgeridoo"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var President=[];
    President[0]="Roosevelt";
    President[1]="Taft";
    President[2]="Wilson";
    President[3]="Harding";
    President[4]="Coolidge";
    President[5]="Hoover";
    President[6]="FDR";
    document.getElementById("Array").innerHTML="One 20th century President of the United States was " +
        President[6] + ".";
}

function constant_function() {
    const Quest_Character={race:"Drow", class: "paladin", alignment: "lawful neutral"};
    Quest_Character.background="merchant";
    Quest_Character.race="Aasimar";
    document.getElementById("Constant").innerHTML="The alignment of the " + Quest_Character.class + 
    ", Basil, is " + Quest_Character.alignment;
    document.getElementById("Constant").innerHTML="The " + Quest_Character.race + 
    " known as 'Basil', was once a " + Quest_Character.background;
}

var A=10;
document.write(A);
{
    let A="mushrooms";
    document.write("<br>" + A);
}
document.write("<br>" + A);

let hero = {
    name: "Chaz",
    race: "Human",
    class: "Monk",
    alignment: "Lawful neutral",
    description : function() {
        return "This character is a " + this.alignment + this.race + this.class;
    }
};
document.getElementById("Hero_Object").innerHTML = hero.description();


