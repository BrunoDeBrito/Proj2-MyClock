let digitalElement = document.querySelector('.digital');
let dateElement    = document.querySelector('.data');

let hElement       = document.querySelector('.p_h');
let mElement       = document.querySelector('.p_m');
let sElement       = document.querySelector('.p_s');

function updateClock() {

    let now    = new Date();
    let hour   = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${ fixZero(hour) }:${ fixZero(minute) }:${ fixZero(second) }`;

    let hDeg = ((360 / 12) * hour)   - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let sDeg = ((360 / 60) * second) - 90;

    hElement.style.transform = `rotate(${ hDeg }deg)`;
    mElement.style.transform = `rotate(${ mDeg }deg)`;
    sElement.style.transform = `rotate(${ sDeg }deg)`;
}

function fixZero(time) {
        
    return time < 10 ? `0${ time }` : time;

}

setInterval(updateClock, 1000);
updateClock();
