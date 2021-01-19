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

//fail
const seeIfFail = setInterval(function(){
    const playerRight =
    parse(window.getComputedStyle(player).
    getPropertyValue("right"));
    const LavaRightt =
    parse(window.getComputedStyle(lava).
    getPropertyValue("right"));
    if(lavaRightt=173 && lavaRightt=173 && playerRight=70)
        {
            alert("fail")
        }
}, 5)
//input