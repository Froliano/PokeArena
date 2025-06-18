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
    BGM.volume = 0.3;
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

function attackSound() {
    const attackAudio = new Audio('/assets/music/damageSound.mp3');
    attackAudio.volume = 1;
    attackAudio.play();
}

function levelUpSound() {
    const levelUpAudio = new Audio('/assets/music/levelUp.wav');
    levelUpAudio.volume = 1;
    levelUpAudio.play();
}

function healSound() {
    const healAudio = new Audio('/assets/music/heal.wav');
    healAudio.volume = 1;
    healAudio.play();
}

function chapterWonSound() {
    const chapterWonAudio = new Audio('/assets/music/chapterWon.wav');
    chapterWonAudio.volume = 1;
    chapterWonAudio.play();
}

export { playBattleMusic, playMenuMusic, stopCurrentMusic, attackSound, levelUpSound, healSound, chapterWonSound };