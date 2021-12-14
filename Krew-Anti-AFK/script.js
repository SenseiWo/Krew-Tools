setInterval(function unLock() { 
document.addEventListener ('keydown', function (event){ 
console.log (event.which); }); 
var evt = new KeyboardEvent('keydown', {'keyCode':32, 'which':32}); 
document.dispatchEvent (evt); }, 300000); console.log("Anti-AFK Activated");