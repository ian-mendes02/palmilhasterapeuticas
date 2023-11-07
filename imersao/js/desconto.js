const timer = document.getElementById("timer");
document.getElementById("dismiss").addEventListener("click", () => timer.parentElement.remove())
setInterval(()=> {
    var final = new Date("November 8, 2023 12:00:00 GMT-03:00");
    var delta = (final.getTime() - Date.now());
    var d = Math.floor(delta / (1000 * 60 * 60 * 24));
    var h = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((delta % (1000 * 60)) / 1000);
    if (d < 10) d = "0" + d;
    if (s < 10) s = "0" + s;
    if (m < 10) m = "0" + m;
    if (h < 10) h = "0" + h;
    timer.innerHTML = `${d} : ${h} : ${m} : ${s}`;
}, 1000)


