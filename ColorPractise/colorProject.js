
let primaryColor = document.querySelector('.primary-colors');
let secondaryColor = document.querySelector('.secondary-colors');
let nav = document.getElementById('nav');
let primarySection = document.querySelector('.primary-section');
let secondarySection = document.querySelector('.secondary-section');
liner = false
window.addEventListener('load', ()=>{
    primaryColor.classList.add('liner')
})
secondaryColor.addEventListener('click', ()=>{
    secondaryColor.classList.add('liner')
    primaryColor.classList.remove('liner')
    liner = true
    secondarySection.classList.add('show-section')
    
})
primaryColor.addEventListener('click', ()=>{
    if (liner === true){
        secondaryColor.classList.remove('liner')
        primaryColor.classList.add('liner')
    }
    secondarySection.classList.remove('show-section')
})




const primaryBtn = document.querySelector('.primary-btn');
const secondaryBtn = document.querySelector('.secondary-btn');
const primaryColors = ['blue', 'black', 'yellow', 'red', 'white', 'purple', 'brown']
let primaryText = document.querySelector('.primary-text');
let secondaryText = document.querySelector('.secondary-text');
const hexColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']


function randomNumber(arr){
return     Math.floor(Math.random() * arr.length);
}
primaryBtn.addEventListener('click', ()=>{
let randomNum = randomNumber(primaryColors);
    primarySection.style.backgroundColor = primaryColors[randomNum]
    primaryText.textContent = `Primary-Colors: ${primaryColors[randomNum].toUpperCase()}`

    if(randomNum === 2 || randomNum === 4 ){
        primaryBtn.style.border  = `1px solid black`;
        primaryText.style.color  = 'black';
        primaryBtn.style.color  = 'black';
    }
    else{
        primaryBtn.style.border  = `1px solid white`;
        primaryText.style.color  = 'white';
        primaryBtn.style.color  = 'white';
    }
})

secondaryBtn.addEventListener('click', ()=>{
let generatedColor = '#'
    for(i = 0; i < 6; i++){
        let randomNum = randomNumber(hexColors);
        generatedColor += hexColors[randomNum];
        secondarySection.style.backgroundColor = `${generatedColor}`
        secondaryText.textContent = `Secondary-Colors: ${generatedColor.toUpperCase()}`
    }
})


//     let basicColors = ['blue', 'black', 'yellow', 'red', 'white', 'purple', 'brown'];
//     let otherColors = ['1', '2', '3','4', '5', '6','7', '8', '9','0', 'A', 'B','C', 'D', 'E', 'F'];
//     let btns = document.querySelectorAll('button');
//     let primaryText =  document.querySelector('.primary-text')
//     let secondaryText =  document.querySelector('.secondary-text')


//   btns.forEach(btn =>{
//     btn.addEventListener('click', (e)=>{
//         target = e.currentTarget.classList
//         if (target.contains('primary-btn')){
//             randomNum = Math.floor(Math.random() * basicColors.length);
//             primarySection.style.backgroundColor = basicColors[randomNum]
//           primaryText.innerText = `Background Color: ${basicColors[randomNum]}`
//         }
//         else{
//             let hexColors = '#'
//             for(i = 0 ; i<6 ; i++){
//                 randomNum = Math.floor(Math.random() * otherColors.length);                    
//                 hexColors += otherColors[randomNum];
//                 console.log(hexColors)
//                 secondarySection.style.background = hexColors
//                 secondaryText.innerText = `Background Color: ${hexColors}`
//             }
        
//         }
    // else{
    //     let hexColors = '#'
    //     for(i = 0 ; i<6 ; i++){
    //         hexColors += otherColors[getRandomNumber(otherColors)];
    //         secondarySection.style.backgroundColor = hexColors
    //         secondaryText.innerText = `Background Color: ${hexColors}`
    //     }
    // }
    
    // function getRandomNumber(number){
    //     return Math.floor(Math.random() * number.length);
    // }
