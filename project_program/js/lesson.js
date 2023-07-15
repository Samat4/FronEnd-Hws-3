const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneInput.value = '+996 '

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'Ok'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'Not ok'
        phoneResult.style.color = 'red'
    }
})