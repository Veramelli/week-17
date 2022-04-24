let messages = [];

function addMessage() {
    let text = document.querySelector('input').value;
    messages.push(text);
    generationMessages();

}

function generationMessages() {
    let optionsString = '';
    for (let m of messages) {
        optionsString += `<div>${checkSpam(m)}</div>`
    }
    document.querySelector('.message').innerHTML = optionsString;
}

const checkSpam = m => m.replace(/viagra|xxx/gi, "***");