function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Character(Race, Class, Age, Level) {
    this.Character_Race=Race;
    this.Character_Class=Class;
    this.Character_Age=Age;
    this.Character_Level=Level;
}
var Basil=new Character("Drow", "Paladin", 150, 4);
function questFunction() {
    document.getElementById("New_and_This").innerHTML=
    "Basil is a " + Basil.Character_Age + "-year-old" + Basil.Character_Race + Basil.Character_Class +
    " of level " + Basil.Character_Level;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Multiply();
    function Multiply() {
        var Starting_Point=3;
        function Times_two() {Starting_Point *= 2;}
        Times_two();
        return Starting_Point;
    }
}