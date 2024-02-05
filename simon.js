let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"]

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");
document.addEventListener('keypress', function() {
    if( started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);
};

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    } , 200);
};
  
function levelUp () {
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
};

function checkAns(idx) {
    // console.log("crr level",level);
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
     
    } else {
        h2.innerText = `Game Over!
        Your score is ${level}
        Press any key to start.` ;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#414141";
        },200)
        reset ();
    }
};

function btnPress () {
    // console.log(this);
    let btn = this;
    userflash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click",btnPress)
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}