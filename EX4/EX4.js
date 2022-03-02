const n=document.getElementById("ol");
 n.addEventListener("click",
    (e)=>{
              
        e.target.style.color ="#" +Math.floor(Math.random() * 16777215).toString(16);
    }
    );