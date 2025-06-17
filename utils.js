const log = document.getElementById('log');

function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

export { logMsg };