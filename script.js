const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


var novoAno = "";
var invalidDate = "";
const data_escolhida = document.getElementById('date');
const mensagemInvalida = document.getElementById('invalid_date');

data_escolhida.addEventListener('change', (event) => {
  novoAno = event.target.value;
  invalidDate = event.target.value;
})

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const countdown = () => {
  if(novoAno != ""){
    const newYearsDate = new Date(novoAno);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    if(totalSeconds < 10){
      mensagemInvalida.style.color = "#d81b36";
      daysEl.innerText = '0';
      hoursEl.innerText = '0';
      minsEl.innerText = '0';
      secondsEl.innerText = '0';
    }else{
      mensagemInvalida.style.color = "transparent";

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = (Math.floor(totalSeconds / 3600) % 24) + 3;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysEl.innerHTML = days;
      hoursEl.innerHTML = formatTime(hours);
      minsEl.innerHTML = formatTime(mins);
      secondsEl.innerHTML = formatTime(seconds);
    }
  }else{
    daysEl.innerText = '0';
    hoursEl.innerText = '0';
    minsEl.innerText = '0';
    secondsEl.innerText = '0';
  }
}



setInterval(countdown, 1000);
