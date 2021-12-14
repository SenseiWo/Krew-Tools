let div = document.createElement('div'); div.id = 'Anti-AFK';
div.innerHTML = '<br><center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);" onclick="StarterJS()">StartBot</button></center>';
document.getElementById("krew-hud").appendChild(div);

function StarterJS() {
document.title = "Bot script enabled!";
setInterval(function() {
document.getElementById("abandon-ship-button").click(); 
}, 1000); 
setInterval(function() {
document.getElementById("play-again-button").click(); 
}, 1000); 
document.addEventListener ('keydown', function (event){ 
console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37}); 
document.dispatchEvent (evt); 
}
