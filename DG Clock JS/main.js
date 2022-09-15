function GetTime(){
    var now = new Date();
    var hour= now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var day = now.getDay();
    var month = now.getMonth()+1;
    var year = now.getFullYear();

(hour<10) ? document.getElementById("hour").innerText="0"+hour:
            document.getElementById("hour").innerText=hour;
            
(minute<10) ?          document.getElementById("minute").innerText="0"+minute:
            document.getElementById("minute").innerText=minute;
document.getElementById("second").innerText=second;
(second<10) ? document.getElementById("second").innerText="0"+second:


document.getElementById("date").innerText = day+" / "+month+" / "+year;
}

setInterval(function(){GetTime();},1000);
