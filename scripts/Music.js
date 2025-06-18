let BGM;
let menu = document.getElementById('menu');
let firstRegisteredClick = false;

document.addEventListener('click', () => {
    firstRegisteredClick = true;
}, { once: true });

function playBattleMusic() {
    if (!firstRegisteredClick) {
        document.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                playMenuMusic();
            } else {
                playBattleMusic();
            }
        }, { once: true });
        return;
    }
    BGM = new Audio('/assets/music/battleMusic.mp3');
    BGM.loop = true;
    BGM.volume = 0.5;
    BGM.play()
}

function playMenuMusic() {
    if (!firstRegisteredClick) {
        document.addEventListener('click', () => {
            playMenuMusic();
        }, { once: true });
        return;
    }
    BGM = new Audio('/assets/music/menu.mp3');
    BGM.loop = true;
    BGM.volume = 0.5;
    BGM.play();
}

function stopCurrentMusic() {
    if (BGM) {
        BGM.pause();
        BGM.currentTime = 0;
    }
}

export { playBattleMusic, playMenuMusic, stopCurrentMusic };