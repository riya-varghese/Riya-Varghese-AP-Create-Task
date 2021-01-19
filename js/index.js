/*const player = document.getElementById('player');
const history = document.getElementById('history');

function jumplava(){
    player.classList('jump-over');
    setTimeout(() => {
        player.classList.remove('jump-over');
    }, 250);
};

document.addEventListener('keyup', () => {
    jumplava();
});
*/

//jumpfunction
const player = document.getElementById('player');
const history = document.getElementById('history');
var enter = document.getElementById('enter');

console.log(player);
function jumplava(){
    player.classList.add("jump-over");
    setTimeout(() => {
        player.classList.remove('jump-over');
    }, 600);
};

document.addEventListener('keypress', event => {
    jumplava();
});

//fail alert
const seeIfFail = function() {
    const playerRight =
    parseInt(window.getComputedStyle(player).
    getPropertyValue("right"));
    const LavaRight =
    parseInt(window.getComputedStyle(lava).
    getPropertyValue("right"));
    if(LavaRight === 75 && playerRight === 70)
        {
            alert("fail")     
        };
     };

seeIfFail();

//input
enter.addEventListener("click", displayName);
var row = 1
function displayName() {
   
var name = document.getElementById("name").value; 
var display = document.getElementById("display");
var newRow= display.insertRow(row);

var cell1 = newRow.insertCell(0);

cell1.innerHTML = name;

row ++;
}
