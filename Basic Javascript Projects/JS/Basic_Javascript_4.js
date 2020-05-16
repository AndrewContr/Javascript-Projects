function my_Dictionary() {
    var Character= {
        Name:"Basil Hitler",
        Race:"Drow",
        Class:"Paladin",
        Age:150,
        Level:4
    };
    delete Character.Class;
    document.getElementById("Dictionary").innerHTML=Character.Class;
}