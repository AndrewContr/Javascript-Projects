function Superhero_Function() {
    var Superhero_Output;
    var Superheroes=document.getElementById("Superhero_Input").value;
    var Superhero_String=" is the only worthwhile superhero!";
    switch(Superheroes) {
        case "Italian Spider-Man":
            Superhero_Output="Italian Spider-Man" + Superhero_String;
        break;
        case "The Blue Beetle":
            Superhero_Output="The Blue Beetle" + Superhero_String;
        break;
        case "Booster Gold":
            Superhero_Output="Booster Gold" + Superhero_String;
        break;
        case "Steel":
            Superhero_Output="Steel" + Superhero_String;
        break;
        case "Rorschach":
            Superhero_Output="Rorschach" + Superhero_String;
        case "Turkish Spider-Man":
            Superhero_Output="Turkish Spider-Man" + Superhero_String;
        break;
        case "Zorro":
            Superhero_Output="Zorro" + Superhero_String;
        break;
        default:
        Superhero_Output="Please enter a superhero exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML=Superhero_Output;
}

function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}

var c=document.getElementById("ID_Name");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
ctx.fillText("Schmutz", 175, 125);

var c=document.getElementById("Gradient_Name");
var ctx=c.getContext("2d");

var grd=ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle=grd;
ctx.fillRect(20, 20, 150, 100);