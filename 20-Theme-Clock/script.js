const hourEL = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')
const secondEL = document.querySelector('.second')
const timeEL = document.querySelector('.time')
const dateEL = document.querySelector('.date')
const toggleEL = document.querySelector('.toggle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEL.addEventListener ('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
        }
})


function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'


    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEL.innerHTML = `${hoursForClock}:${minutes < 10 ? `0$
    {minutes}` : minutes} ${ampm}`
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span`
}

// Stack Overflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


    const scale = (num, inMin, inMax, outMin, outMax)  => {
        return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }



setTime()

setInterval(setTime, 1000)