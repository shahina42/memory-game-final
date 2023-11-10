//GAME PAGE GS
const section= document.querySelector('section');
const lives=document.querySelector('.lives');
let moves=8;
let play=document.getElementById("PLAY");
let result =document.getElementById("result");
var scoreText = document.querySelector("#score")
var finalScore = document.querySelector(".final-score")
var nme = document.querySelector("#nick")



// console.log(scoreText.innerHTML)
let score = 0;

lives.textContent=moves;
// var test = sessionSgetItemtorage('Fullname')

//audio
const bgm =new Audio("bgm.mp3");
bgm.play();
// bgm.loop=true;
bgm.volume=0.2;



let flip =new Audio("flip.mp3");
section.onclick=()=>{
    flip.pause()
    flip.currentTime=0;
    flip.play()
   
}
//getting the images 

const pic=()=>[
{name:"p1",image:"1.png"},
{name:"p2",image:"2.png"},
{name:"p3",image:"3.png"},
{name:"p4",image:"4.png"},
{name:"p5",image:"5.png"},
{name:"p6",image:"6.png"},
{name:"p7",image:"7.png"},
{name:"p8",image:"8.png"},
{name:"p1",image:"1.png"},
{name:"p2",image:"2.png"},
{name:"p3",image:"3.png"},
{name:"p4",image:"4.png"},
{name:"p5",image:"5.png"},
{name:"p6",image:"6.png"},
{name:"p7",image:"7.png"},
{name:"p8",image:"8.png"}

];

//randomize

const random =()=>{
    const cards= pic();
    cards.sort(()=>Math.random()-0.5)
    return cards;
}; 

//generateCard

const generateCard=()=>{
    const cards=random();

    //html--
    cards.forEach((item) =>{
        const aCard =document.createElement("div");
        const face =document.createElement("img");
        const back =document.createElement("div");
         aCard.classList.add("aCard");
         face.classList.add("face");
         back.classList.add("back");
         //attaching img to cards
         face.src=item.image;
         aCard.setAttribute("name",item.name)

        //attaching cards to section
        aCard.appendChild(face);
        aCard.appendChild(back);
        section.appendChild(aCard);
        
      aCard.addEventListener("click",(e)=>{
        aCard.classList.toggle('toggleaCard');
        checkCards(e);
      })
    })

} 
function checkWin(){
    if(score===40){
        won();
    }
}

//check cards
const checkCards= (e)=>{
    const clickedCard=e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
//if statements
 if(flippedCards.length ===2 ){
    if(flippedCards[0].getAttribute("name")===
    flippedCards[1].getAttribute("name"))
    {
        score+=5
        scoreText.innerHTML=score
        console.log(score)
        console.log("match");
        flippedCards.forEach((aCard)=>{
           aCard.classList .remove("flipped");
           aCard.style.pointerEvents = "none";
        
        })
        checkWin()
    }else{
        console.log("wrong");
        flippedCards.forEach((aCard)=>{
            aCard.classList.remove("flipped")
            setTimeout(()=>aCard.classList.remove("toggleaCard"),1000);
           
        
        })

        
        document.getElementById("PLAY").addEventListener("click", () => {
            score=0;
            document.querySelector(".popup").style.display = "none";
            let cards=random();
            let faces = document.querySelectorAll(".face");
            let box=document.querySelectorAll(".aCard");
            cards.forEach((item,index)=>{
                box[index].classList.remove("toggleaCard");
                box[index].style.pointerEvents="all";
                faces[index].src=item.image;
                box[index].setAttribute("name",item.name)
                lives.innerText=`${8}`
                scoreText.innerText=0;
                sessionStorage.clear()
                

                
                

            })}
        )
        
        moves--;
        lives.textContent=moves;

        if(moves===0){
            sessionStorage.setItem('score', scoreText.innerHTML);
            loose();
            moves=8

        }
        checkWin()
        
       
    }
    
 }




};


generateCard();
     

function loose(){
    document.querySelector(".popup").style.display = "flex";
    finalScore.innerHTML=sessionStorage.getItem('score')
    const name1=sessionStorage.getItem('Nickname')
    console.log(sessionStorage.getItem('Nickname'))
    result.innerText="YOU LOSE 🥺 "+name1;
     phrase.textContent=  lostgame();
     sessionStorage.clear()
}


let qoutes=["Another shot","Let's try again","Retry , Rethink","Dont give up","One more time"
];

let fail=0;
function lostgame(){
    fail++;
    return displayQoute();
}

function displayQoute(){
    const words=document.querySelector("#phrase");
    const randomDisplay=qoutes[Math.floor(Math.random()*5)]
    console.log(randomDisplay);
    return randomDisplay;
}


function won(){
    document.querySelector(".popup").style.display = "flex";
    finalScore.innerHTML="40";
    const name1=sessionStorage.getItem('Nickname')
    console.log(sessionStorage.getItem('Nickname'))
     result.innerText="YOU WON  🤗 "+name1;;
     phrase.textContent=  wingame();
     score=0
    
     
    
}

let thoughts=["Nailed it","Bravo!","Aced it","Fantastic","Great job"
];

let win=0;
function wingame(){
    win++;
    return displayThoughts();
}

function displayThoughts(){
    const words=document.querySelector("#phrase");
    const randomThoughts=thoughts[Math.floor(Math.random()*5)]
    console.log(randomThoughts);
    return randomThoughts;
}

