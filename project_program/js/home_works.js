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

// 1)  Доработать прошлое ДЗ! Нужно чтобы малый квадрат теперь двигался
// по всемуродительскому квадрату.Дорабатываете код внутри проекта.

const redBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 447 && positionY === 0) {
        positionX++
        redBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX >= 447 && positionY < 447) {
        positionY++
        redBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    } else if (positionX !== 0 && positionY >= 447) {
        positionX--
        redBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX === 0 && positionY !== 0) {
        positionY--
        redBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}

move()

// Timer
// 2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
// Если нажать на start то цифра начнет увеличиваться на единицу до того
// момента пока вы не нажмете на кнопку stop
// Используйте методы которые мы прошли на уроке.Добавить кнопку resume,
// при нажатии она должна продолжить тот счет на котором остановился.
// Добавить кнопку resume при нажатии обнуляет счетчик. Обработать все
// возможные баги при работе счетчика (вёрстка в проекте уже есть) Код писать
// внутри проекта (home_works.js)

const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const mlSeconds = document.querySelector('#ml-seconds')

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let mm = 0
let ss = 0
let ms = 0

const startTimer =  () => {
    ms++
    if (ms >= 60) {
        ms = 0
        ss++
    } else if ( ss >= 60) {
        ss = 0
        mm++
    }
}

const addTime = () => {
    startTimer()
    mlSeconds.innerHTML = ms
    seconds.innerHTML = ss
    minutes.innerHTML = mm
}

startBtn.addEventListener('click', () => {
    interval = setInterval(addTime, 15)
    startBtn.disabled = true
    stopBtn.disabled = false
    resetBtn.disabled = false
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    startBtn.disabled = false
    stopBtn.disabled = true
    resetBtn.disabled = false
})

resetBtn.addEventListener('click', () => {
    mm = 0
    ss = 0
    ms = 0
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    mlSeconds.innerHTML = '00'
    clearInterval(interval)
    startBtn.disabled = false
    stopBtn.disabled = false
    resetBtn.disabled = true
})