function jouer(){
var c=Math.floor(Math.random()*10);
var d =window.prompt(" choissisez la difficulte de 1 a 3");
if (d==1) tries=7;
else if (d==2) tries=5;
else tries=3;
while(tries>0){
    tries--;
    var input=window.prompt("entrer un chiffre");
    if(input==c){
        window.alert("YOU WON !!");
        tries=0;
       
    }
    else { if (tries ==0){
        window.alert("you lost!");}
        
            else {window.alert("il vous reste "+ tries + "essaies");}
        
    }
}

   
}
jouer();
while(window.confirm("voulez vous jouer de nouveau?")==true) {jouer();}
