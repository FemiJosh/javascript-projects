let num = document.querySelector('.number');
let btns = document.querySelectorAll('button')
let counter = 0;


btns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        target = e.currentTarget.classList;
        
        if(target.contains('increase')){
            counter++;
            // num.style.fontSize = `${fonter + 160}px`;
            num.style.fontSize = `${counter*5 + 160}px`
            console.log(num)
        } 
        else if(target.contains('decrease')){
            counter--;
            // num.style.fontSize = `${fonter + 160}px`;
            num.style.fontSize = `${counter*5 + 160}px`
            console.log(num.style.fontSize)
            console.log(counter)
        }
    
        else if(target.contains('reset')){
    
            counter = 0;
            num.style.fontSize = `${160}px`
        }

        num.innerText = counter;
        if(counter < 0){
            num.style.color = 'red';

        }
        else if (counter > 0){
            num.style.color = 'green';
        }
        else{
            num.style.color = 'black'
        }

    })
})