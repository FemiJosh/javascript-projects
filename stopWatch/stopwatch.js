window.addEventListener('load', ()=>{
   
    let play = document.querySelector('.play');
    let reset = document.querySelector('.reset');
    let pause = document.querySelector('.pause');
   
     let seconds = 0;
     let minutes = 0;
     let hours = 0;
        let arr = [];
        console.log(arr)
     let leadingSeconds = 0;
     let leadingMinutes = 0;
     let leadingHours = 0;
    


    function stopWatch () {
        seconds++
            if (seconds/60 === 1){
            seconds = 0;
            minutes++
        
            if (minutes/60 === 1){
            minutes = 0;
            hours++
        }
        }

        if (seconds < 10){
            leadingSeconds = '0' + seconds
        }
        else {
            leadingSeconds= seconds;
        }
        if (minutes< 10){
            leadingMinutes= '0' + minutes
        }
        else {
            leadingMinutes = minutes;
        }
        if ( hours < 10){
            leadingHours = '0' + hours
        }
        else{
            leadingHours = hours;
        }

              let timer = document.querySelector('.timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;

}

        let timerInterval= null;
        let timerStatus = 'start'

        play.addEventListener('click', ()=>{
            if (timerStatus === 'start')    {
                timerInterval = window.setInterval(stopWatch , 100);
                document.querySelector('.play').classList.add('pause');
                document.querySelector('.play').innerHTML= 'PAUSE'
                timerStatus= 'stop'
                arr.shift(seconds)
                arr.shift(minutes)
                arr.shift(hours)
                console.log(arr)
            }
            else{
                timerInterval= window.clearInterval(timerInterval);
                document.querySelector('.play').classList.remove('pause');
                document.querySelector('.play').innerHTML = "PLAY";
                timerStatus= 'start';
                arr.unshift(seconds)
                arr.unshift(minutes)
                arr.unshift(hours)
                console.log(arr)
                localStorage.setItem('savedTime',JSON.stringify(arr))
            }
        })
      
        console.log(timerInterval)
        reset.addEventListener('click', ()=>{
    
            if (timerStatus === 'start')    {
                timerInterval= window.clearInterval(timerInterval);
                seconds=0;
                minutes=0;
                hours=0;
    
                document.querySelector('.timer').innerText= "00:00:00";
                document.querySelector('.play').classList.remove('pause');
                document.querySelector('.play').innerHTML = "PLAY";                      
            }
            else{
                alert ('press pause first bros')
            }
        })  

        let getSave = JSON.parse(localStorage.getItem('savedTime'));
        console.log(getSave)
        
        timer = document.querySelector('.timer').innerText = `${getSave[0]} : ${getSave[1]} : ${getSave[2]}`
        




let clicker = document.querySelector('.ccontainer')
let questions= document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answer');
let nowActive = false;
questions[0].addEventListener('click' , (e)=>{
    answers[0].classList.toggle('active')
    nowActive = true
    if(nowActive){
        answers[1].classList.remove('active')
        answers[2].classList.remove('active')

    }
})
questions[1].addEventListener('click' , (e)=>{
    answers[1].classList.toggle('active');
    nowActive = true
    if(nowActive){
        answers[2].classList.remove('active')
        answers[0].classList.remove('active')

    }
})

questions[2].addEventListener('click' , (e)=>{
    answers[2].classList.toggle('active');
    nowActive = true
    if(nowActive){
        answers[1].classList.remove('active')
        answers[0].classList.remove('active')

    }
})
})
