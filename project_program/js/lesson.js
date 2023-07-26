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

//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let currentTab = 0

const hideTabContent = () => {
    tabContent.forEach((element) => {
        element.style.display = 'none'
    })
    tabs.forEach((element) => {
        element.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)


tabsParent.onclick = (event) => {
    const targetElement = event.target
    if (targetElement.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(currentTab)
            }
        })
    }
}


// CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, target, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET","../data/convert.json")
        request.setRequestHeader("Content-type","application/json")
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if (isTrue === 1) {
                target.value = (element.value / data.usdToSom).toFixed(2)
                target2.value = (element.value / data.eurToSom).toFixed(2)
            } else if (isTrue === 2) {
                target.value = (element.value * data.usdToSom).toFixed(2)
                target2.value = (element.value / data.eurToUsd).toFixed(2)
            } else if (isTrue === 3) {
                target.value = (element.value * data.eurToUsd).toFixed(2)
                target2.value = (element.value * data.eurToSom).toFixed(2)
            }
            element.value === '' && (target.value = '') (target2.value = '')
        }
    }
}

convert(som, usd, eur, 1)
convert(usd, som, eur,2)
convert(eur, usd , som, 3)


