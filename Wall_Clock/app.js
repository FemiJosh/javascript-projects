const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

console.log(hourHand,minuteHand,secondHand)



function getTime(){
    const realTime = new Date();
    const secondRatio = realTime.getSeconds() / 60;
    const minuteRatio = (secondRatio + realTime.getMinutes())/ 60;
    const hourRatio = (minuteRatio + realTime.getHours() + 1)/12;

    setRotaion(secondHand, secondRatio);
    setRotaion(minuteHand, minuteRatio);
    setRotaion(hourHand, hourRatio);

    console.log(secondRatio,minuteRatio,hourRatio);
    let getter = document.querySelector('.number')
console.log(getter);

let getValue = getComputedStyle(getter);
console.log(getValue.getPropertyValue('--rotation'))
}

function setRotaion(element, ratios){
    element.style.setProperty('--rotation', ratios * 360 )
    console.log(getComputedStyle(element).getPropertyValue("--rotation"))
}
setInterval(getTime,1000)
getTime();