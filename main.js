const startBtn = document.querySelector('#start'),
       screens = document.querySelectorAll('.screen'),
      timeList = document.querySelector('#time-list'),
        timeEl = document.querySelector('#time'),
         boarD = document.querySelector('#board'),
   mainHeading = document.querySelector('#main-heading'),
         again = document.querySelector('#again'),
           src = document.querySelector('#src');
  
let    time = 0,
screanWidth =  window.innerWidth,
screanHeight =  window.innerHeight,
      score = 0;

 
startBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click',(event) =>{
    if(event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
    }
});
 
boarD.addEventListener('click',event =>{
    if (event.target.classList.contains('circle')){
        score++;
        event.target.remove();
        createRandomCircle();
    }
});
function startGame (){
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
} 
function decreaseTime(){
    if(time === 0){
        finishGame();
    }else{
        let current = --time;
        if(current < 10){
            current = `0${current}`;
        }
        setTime(current);
        }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`;
}

function finishGame(){
    timeEl.parentNode.classList.add('hide');
    boarD.innerHTML = `<h1>Your score: ${score}</h1>`;
    again.classList.remove('hide')
}
const circle = document.createElement('div');

function tryAgain(){
    screens[0].classList.remove('up');
    screens[1].classList.remove('up');
}
function createRandomCircle(){
    const  {width, height} = boarD.getBoundingClientRect();
            size = getRandomNumber(10,60);
            if(screanWidth<500){
                x = getRandomNumber(0, screanWidth - size),
                console.log(x);
                y = getRandomNumber(0,height - size );
                console.log(y);

            }else{
                x = getRandomNumber(0,width - size),
                y = getRandomNumber(0,height - size);
            }
    circle.classList.add('circle');
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;
        boarD.append(circle) ;
}


function getRandomNumber(min,max){
    return Math.round(Math.random () * (max-min) + min);
}

again.addEventListener('click',()=>{
    window.location.reload();
})