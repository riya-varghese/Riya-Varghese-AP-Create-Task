const player = document.getElementById('player');
const history = document.getElementById('history');

function jumplava(){
    player.classList('jump-over');
    setTimeout(() => {
        player.classList.remove('jump-over');
    }, 250);
};

document.addEventListener('keypress', () => {
    jumplava();
});
