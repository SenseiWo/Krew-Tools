function sleep(milliseconds) { const date = Date.now();
let currentDate = null; do { currentDate = Date.now(); } 
while (currentDate - date < milliseconds); }
function repeat(func, times) { func(); times && --times && repeat(func, times); }
let divHTH = document.createElement('divHTH'); divHTH.id = 'HTML_txt_header';
divHTH.innerHTML = '<center><h1>Functions</h1></center>';
document.getElementById("game-settings-modal").appendChild(divHTH);
let div = document.createElement('div'); div.id = 'Anti-AFK';
div.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="AntiAFK()">Anti-AFK</button></center>';
document.getElementById("game-settings-modal").appendChild(div);
let div25101 = document.createElement('div'); div25101.id = 'ModernGUI15891';
div25101.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="ModernGUI()">Modern-GUI</button></center>';
document.getElementById("game-settings-modal").appendChild(div25101);
let div2510190 = document.createElement('div'); div2510190.id = 'ClanRaidbtn';
div2510190.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="CreateClan()">Clan-Bomb</button></center>';
document.getElementById("game-settings-modal").appendChild(div2510190);
let div25101901 = document.createElement('div'); div25101901.id = 'FireRate';
div25101901.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="FireRate()">Fire-Rat | Max</button></center>';
document.getElementById("game-settings-modal").appendChild(div25101901);
let div251019011 = document.createElement('div'); div251019011.id = 'Distance';
div251019011.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="Distance()">Distance | Max</button></center>';
document.getElementById("game-settings-modal").appendChild(div251019011);
let div251019012 = document.createElement('div'); div251019012.id = 'Damage';
div251019012.innerHTML = '<center><button style="width: 250px; height: 40px; background-image: linear-gradient(to left, green, yellow, orange);" onclick="Damage()">Damage | Max</button></center>';
document.getElementById("game-settings-modal").appendChild(div251019012);
let div000 = document.createElement('div'); div.id = 'hiddenID9245'; div000.innerHTML = '<br>';
document.getElementById("game-settings-modal").appendChild(div000);
let divHTH1 = document.createElement('divHTH1'); divHTH1.id = 'HTML_txt_header1';
divHTH1.innerHTML = '<center><h1>Movement</h1></center>';
document.getElementById("game-settings-modal").appendChild(divHTH1);
let divWR = document.createElement('div'); divWR.id = 'Welk-RightID';
divWR.innerHTML = '<center><button style="width: 250px; height: 40px;" onclick="Walk_R()">Walk-Right</button></center>';
document.getElementById("game-settings-modal").appendChild(divWR);
let divWL = document.createElement('div'); divWL.id = 'Welk-LeftID';
divWL.innerHTML = '<center><button style="width: 250px; height: 40px;" onclick="Walk_L()">Walk-Left</button></center>';
document.getElementById("game-settings-modal").appendChild(divWL);
let divWF = document.createElement('div'); divWF.id = 'Welk-ForwardID';
divWF.innerHTML = '<center><button style="width: 250px; height: 40px;" onclick="Walk_F()">Walk-Forward</button></center>';
document.getElementById("game-settings-modal").appendChild(divWF);
let divWB = document.createElement('div'); divWB.id = 'Welk-BackwardsID';
divWB.innerHTML = '<center><button style="width: 250px; height: 40px;" onclick="Walk_B()">Walk-Backwards</button></center>';
document.getElementById("game-settings-modal").appendChild(divWB);
let divJump = document.createElement('div'); divJump.id = 'JumpID';
divJump.innerHTML = '<center><button style="width: 250px; height: 40px;" onclick="Jump()">Auto-Jump</button></center>';
document.getElementById("game-settings-modal").appendChild(divJump);
let div0001 = document.createElement('div'); div0001.id = 'hiddenID9245'; div0001.innerHTML = '<br>';
document.getElementById("game-settings-modal").appendChild(div0001);
document.getElementById("game-settings-modal").style.border = "thick solid black";
document.getElementById("toggle-game-settings-modal-button").style.border = "2px solid gold"; 
function AntiAFK() { document.getElementById("close-game-settings-modal-button").click();
document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();
var Enabled = new Audio('https://www.mboxdrive.com/1639430555164-voicemaker.in-speech.mp3');  Enabled.play();
document.addEventListener ('keydown', function (event){ console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':32, 'which':32});  document.dispatchEvent (evt); }
function Remove1() { var el1A = document.getElementById('Remove20201'); var el2A = document.getElementById('txt019542'); el1A.remove(); el2A.remove(); }
function Remove4() { var el1D = document.getElementById('textID7952'); var el2D = document.getElementById('txt91252'); el1D.remove(); el2D.remove(); }
function Remove5() { var el1C = document.getElementById('txt45641110'); var el2C = document.getElementById('R1emove1157'); el1C.remove(); el2C.remove(); }
function AutoFish() { document.getElementById("close-game-settings-modal-button").click();
document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();
var Enabled = new Audio('https://www.mboxdrive.com/1639430555164-voicemaker.in-speech.mp3');  Enabled.play();
document.addEventListener ('keydown', function (event){ console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':50, 'which':50}); 
document.dispatchEvent (evt); document.title = "Auto-Fish mode enabled"; }
function ModernGUI() { var x = document.getElementsByClassName("modal-header"); var i; for (i = 0; i < x.length; i++) { x[i].style.borderBottom = "2px solid gold"; }
document.getElementById("shopping-modal").style.border = "2px solid gold"; document.getElementById("chat-history").style.color = "blue";
document.getElementById("close-game-settings-modal-button").click();
document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();
var Enabled = new Audio('https://www.mboxdrive.com/1639430555164-voicemaker.in-speech.mp3');  Enabled.play();
document.title = "Krew.io - Modern-GUI"; document.getElementById("leaderboard").style.border = "2px solid black";
document.getElementById("leaderboard").style.borderRadius = "3px";
document.getElementById("leaderboard").style.color = "black";
document.getElementById("leaderboard").style.backgroundImage = "url('https://i.ibb.co/JBS1gg4/img.jpg')";
document.getElementById("krew-hud").style.backgroundImage = "url('https://i.ibb.co/K2mL8RH/978285.gif')";
document.getElementById("krew-hud").style.borderRadius = "3px";
document.getElementById("krew-hud").style.border = "2px solid black";
document.getElementById("krew-hud").style.height = "140px";
document.getElementById("toggle-invite-link-button").style.border = "1px solid black";
document.getElementById("exit-island-button").style.border = "1px solid black";
document.getElementById("show-map-text").style.color = "black";
document.getElementById("game-settings-modal").style.backgroundImage = "url('https://i.ibb.co/JBS1gg4/img.jpg')";
document.getElementById("minimap-container").style.backgroundImage = "url('https://i.ibb.co/bLBGXXD/pirate-treasure-map.jpg')";
document.getElementById("experience-attribute-container").style.border = "2px solid white";
document.getElementById("experience-attribute-container").style.borderRadius = "10px";
document.getElementById("player-leaderboard").style.border = "2px solid blue";
document.getElementById("player-leaderboard").style.borderRadius = "2px";
document.getElementById("player-leaderboard").style.color = "white";
document.getElementById("player-leaderboard").style.backgroundColor = "black";
document.getElementById("game-settings-modal").style.border = "2px solid red";
document.getElementById("chat-div").style.border = "2px solid silver";
document.getElementById("top-menu-ui").style.border = "2px solid blue";
document.getElementById("fps-wrapper").style.border = "2px solid black";
document.getElementById("fps-wrapper").style.backgroundColor = "black";
document.getElementById("fps-wrapper").style.color = "white";
document.getElementById("ping-wrapper").style.border = "2px solid black";
document.getElementById("ping-wrapper").style.backgroundColor = "black";
document.getElementById("ping-wrapper").style.color = "white";
document.getElementById("experience-ui").style.border = "1px solid black"; }
function CreateClan() { document.getElementById("close-game-settings-modal-button").click();
document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();
setInterval(function CreateClan90() { var CreateRequest= document.getElementById("clan-request");
var l = 4, s = ""; for(i = l; i --> 0;) { t = Math.floor(Math.random() * 62);
s += String.fromCharCode(t < 10 ? 48 + t : t < 36 ? 55 + t : 61 + t); } 
CreateRequest.value = s; document.getElementById("create-clan-button").click();
document.getElementById("leave-clan-button").click(); }, 1000); }
function Walk_R() { var e = new Event('keydown'); e.which = e.keyCode = 39; document.dispatchEvent(e); 
document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click(); }
function Walk_F() { var e = new Event('keydown'); e.which = e.keyCode = 38; document.dispatchEvent(e); 
document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click(); }
function Walk_B() { var e = new Event('keydown'); e.which = e.keyCode = 40; document.dispatchEvent(e);
document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click(); }
function Walk_L() { var e = new Event('keydown'); e.which = e.keyCode = 37; document.dispatchEvent(e);
document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click(); }
function Jump()   { var e = new Event('keydown'); e.which = e.keyCode = 32; document.dispatchEvent(e);
document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click(); }
function FireRate() { document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();	
repeat(function () { var e = new Event('keydown'); e.which = e.keyCode = 53; document.dispatchEvent(e); var e = new Event('keydown'); e.which = e.keyCode = 53; document.dispatchEvent(e); }, 50); }
function Distance() { document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();	
repeat(function () { var e = new Event('keydown'); e.which = e.keyCode = 54; document.dispatchEvent(e); var e = new Event('keydown'); e.which = e.keyCode = 54; document.dispatchEvent(e); }, 50); }
function Damage() { document.getElementById("close-game-settings-modal-button").click(); document.getElementById("close-help-button").click(); document.getElementById("close-quests-button").click();	            
repeat(function () { var e = new Event('keydown'); e.which = e.keyCode = 55; document.dispatchEvent(e); var e = new Event('keydown'); e.which = e.keyCode = 55; document.dispatchEvent(e); }, 50); }
