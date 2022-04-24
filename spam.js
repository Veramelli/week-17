let messages = [];

function addMessage() {
    let text = document.querySelector('input').value;
    messages.push(text);
    generationMessages();
    checkSpam();
}

function generationMessages() {
    let optionsString = '';
    for (let m of messages) {
        optionsString += `<div>${m}</div>`
    }
    document.querySelector('.message').innerHTML = optionsString;
}

function checkSpam() {
    let lowerStr = messages.toLowerCase();


}