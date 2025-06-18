const log = document.getElementById('log');
const upgradeMenuButton = document.getElementById('upgrade-screen');

function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

function upgradeMenu()
{
    upgradeMenuButton.classList.add('active');
}

export { 
    logMsg, 
    upgradeMenu
};