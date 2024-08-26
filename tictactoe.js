let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true;//player O//
let count =0;

 const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

 ];
 //reset game//
const resetGame=()=>{
   turnO=true;
   enableBtns();
msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
   if(turnO){
    box.innerText="O";
    turnO=false;
   }else{
    box.innerText="X";
    box.classList.add("Xcolor");
    turnO=true;
   }
   box.disabled=true;
   count++;

 let isWinner = checkWinner();
 if(count===9 && !isWinner){
   gameDraw();
 }
});
});

const gameDraw=()=>{
   msg.innerText ="Game was a Draw ";
   msgContainer.classList.remove("hide");
   msgContainer.classList.add("draw");

   disableBtns();
};

const disableBtns=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}


const enableBtns=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}



const showWinner=(winner)=>{
   msg.innerText =`Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
disableBtns();
};

 const checkWinner=()=>{
     for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
     if(pos1Val!="" && pos2Val !="" && pos3Val!=""){
      if(pos1Val===pos2Val && pos2Val===pos3Val){
         console.log("winner",pos1Val);

      showWinner(pos1Val);

      }
     }
     
      }
 };

   
newGame.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);





