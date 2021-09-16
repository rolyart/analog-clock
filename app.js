var body = document.body;

function getClock(){
    var second= document.getElementById('second');
    var minute = document.getElementById('minute');
    var hour = document.getElementById('hour');

    var currentDate = new Date();

    var getSecond=currentDate.getSeconds() /60;
    var getMinute=currentDate.getMinutes()/60;
    var getHour=currentDate.getHours()/12;

    second.style.transform="rotate(" + (getSecond*360) + "deg)";
    minute.style.transform="rotate(" + (getMinute*360) + "deg)";
    hour.style.transform="rotate(" + (getHour*360) + "deg)";

    setTimeout(getClock , 1000);
}

var switchTheme = document.getElementById('switch-theme');
switchTheme.addEventListener('click', ()=>{
   if(body.className=='light'){
    switchTheme.classList.add('on');
    body.classList.remove('light');
    body.classList.add('dark');
   }else{
    switchTheme.classList.remove('on');
    body.classList.add('light');
    body.classList.remove('dark');
   }
})

window.onload = getClock;