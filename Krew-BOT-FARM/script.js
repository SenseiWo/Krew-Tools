function Start_Bot_JS() { document.addEventListener ('keydown', function (event){ 
console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37});
document.dispatchEvent (evt); 
setInterval(() => { console.clear(); console.log("function_checker");
document.addEventListener ('keydown', function (event){ 
console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37});
document.dispatchEvent (evt);
if(document.getElementById("abandon-ship-button")){ document.getElementById("abandon-ship-button").click(); }
if(document.getElementById("exit-island-button")){ document.getElementById("exit-island-button").click(); }
if(document.getElementById("cancel-exit-button")){ document.getElementById("cancel-exit-button").click(); }
if(document.getElementById("close-help-button")){ document.getElementById("close-help-button").click(); }
if(document.getElementById("play-again-button")){ document.getElementById("play-again-button").click(); }
if(document.getElementById("close-game-settings-modal-button")){ 
document.getElementById("close-game-settings-modal-button").click(); }
if(document.getElementById("minimap-container")){
document.getElementById("music-control").value = "0";
document.getElementById("sfx-control").value = "0";
document.getElementById("fov-control").value = "0"; } }, 5000); 
Element.prototype.remove = function() { this.parentElement.removeChild(this); }
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
for(var i = this.length - 1; i >= 0; i--) {
if(this[i] && this[i].parentElement) { this[i].parentElement.removeChild(this[i]); } } }
document.getElementById("chat-div").remove();
document.getElementById("leaderboard").remove();
document.getElementById("top-menu-ui").remove();
document.getElementById("minimap-container").remove();
document.getElementById("toggle-invite-link-button").remove();
document.getElementById("fps-wrapper").remove();
document.getElementById("ping-wrapper").remove(); }
let div = document.createElement('div'); 
div.id = 'Button';
div.innerHTML = '<center><button onclick="Start_Bot_JS()">Start-Bot</button></center>';
document.getElementById("krew-hud").appendChild(div);
