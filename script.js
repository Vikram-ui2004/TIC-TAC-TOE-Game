let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let reset=document.querySelector("#reset");



let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
       else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
       
        
    });
});

const resetgame=()=>{
true0=true;
enableboxes();
msg.classList.add('hide');
            
};

const enableboxes=()=>{
    for(let box of boxes){
  box.disabled=false;
  box.innerText="";
}};

const disableboxes=()=>{
    for(let box of boxes){
  box.disabled=true;
}};

const showwinner=(Winner) => {
    msg.innerText=`Congratulation buddy, Winner is ${Winner}`;
    msg.classList.remove("hide");
    disableboxes();
};

let checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       
        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2===pos3){
        console.log(pos1," is Winner");
        showwinner(pos1);
        
        }
        }
    }
};


reset.addEventListener("click", resetgame);
