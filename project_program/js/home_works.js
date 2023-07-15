// gmail
// 1) Используя регулярные выражения сделать проверку на валидность
// gmail почты внутри проекта. Вёрстка уже есть в проекте, надо только
// добавить фукнционал

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Not ok'
        gmailResult.style.color = 'red'
    }
})

// block
// 2) Используя рекурсию необходимо заставить маленький блок двигаться
// по родительскому блоку вправо. И изменяйте параметр позиции малого блока
// (.style.left=${переменная}px).
// Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и
// остановился. Вёрстка уже есть в самом проекте.

const redBlock = document.querySelector('.child_block')

let gMove = 0

const count = () => {
    if (gMove <= 446) {
        gMove += 1
        redBlock.style.left = `${gMove}px`
    } else {
        clearInterval(moving)
    }
}

const moving = setInterval(count, 1)
