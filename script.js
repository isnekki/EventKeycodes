const keySpan = document.getElementById('key')
const keyCodeSpan = document.getElementById('keyCode')
const codeSpan = document.getElementById('code')

const blocks = document.querySelectorAll('.block')
const preText = document.querySelector('.initialBlock')

const displayEvent = (event) => {
    const { key, keyCode, code } = event

    preText.classList.remove('visible')
    preText.classList.add('invisible')
    blocks.forEach(block => block.classList.remove('invisible'))

    keySpan.textContent = key
    keyCodeSpan.textContent = keyCode
    codeSpan.textContent = code
}

document.addEventListener('keydown', displayEvent)