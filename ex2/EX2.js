var nod1 = document.getElementById("Couleur");
var nod2 = document.getElementById("Size");
var nod3 = document.getElementById("Police");

nod1.addEventListener("change", e => {
        document.getElementById("Test").style.color= nod1.value;
})

nod2.addEventListener("change", function(){
    document.getElementById("Test").style.fontSize = nod2.value + "px";
})

nod3.addEventListener("change", function(){
    var result=nod3.options[nod3.selectedIndex].text;
    document.getElementById("Test").style.fontFamily = result + ",Charcoal,sans-serif";
})