function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;
    var i = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearmainwithblowup();
            clearInterval(i);
        }
    }, 1000);
}

window.onload = function () 
{
    var tenMinutes = 10 * 60;
    var display = document.querySelector('#tenmintimer');
    startTimer(tenMinutes, display);
};

function sleep(delay) 
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}