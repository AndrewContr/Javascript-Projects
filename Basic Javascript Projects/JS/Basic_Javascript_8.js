function Bologna_cheeks() {
    var part_1="Get to ";
    var part_2="the choppah!";
    var whole_sentence=part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function home_Slice() {
    var Sentence="The blood usually gets off on the second floor.";
    var Section=Sentence.slice(4,17);
    document.getElementById("Slice").innerHTML=Section;
}

function string_Method() {
    var X=8927;
    document.getElementById("Number_to_string").innerHTML=X.toString();
}

function precision_Method() {
    var X=5740243.6821;
    document.getElementById("Precision").innerHTML=X.toPrecision(5);
}