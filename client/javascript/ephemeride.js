setInterval(function() {
    document.getElementById("time").innerHTML = new Date().toLocaleDateString();
}, 1000)

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("time1").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTime, 1000);