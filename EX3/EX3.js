document.getElementById("Button").addEventListener("click",function(){
    var text1 = document.getElementById("Name").value ;
    var text2 = document.getElementById("Content").value;
    var id=1;
    if((text1!="") &&(text2!="")){
        var text = text1 + " : " + text2 ;
        var newNode=document.createElement("div");
        newNode.innerText = text ;
        const i=document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-trash");
        i.addEventListener("click",()=>{
            document.getElementById("list").removeChild(newNode);
           
        })
        newNode.id =  id +"";
        document.getElementById("list").appendChild(newNode);
        newNode.appendChild(i);
        id++;
        document.getElementById("Name").value="";
        document.getElementById("Content").value="";



        
    }
    

})
document.getElementById("list").addEventListener("click",function(e){
    e.target.parentnode.removeChild(document.getElementById(i));
})
        