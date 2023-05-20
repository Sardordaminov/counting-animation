let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val")) 
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(() => {
     startValue += 1 
     valueDisplay.innerHTML = startValue;
     if (startValue == endValue) {
        clearInterval(counter)
     }  
    }, duration);
})
