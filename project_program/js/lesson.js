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

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    const targetElement = event.target
    if (targetElement.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}





// Это я написал сам. Очень длинный код получился.
const startTabSlider = () => {
    if (tabs[0].classList.contains('tab_content_item_active')) {
        tabs[0]++
        tabs[0].classList.remove('tab_content_item_active')
        tabs[1].classList.add('tab_content_item_active')
        tabContent[0].style.display = 'none'
        tabContent[1].style.display = 'block'
    } else if (tabs[1].classList.contains('tab_content_item_active')) {
        tabs[1]++
        tabs[1].classList.remove('tab_content_item_active')
        tabs[2].classList.add('tab_content_item_active')
        tabContent[1].style.display = 'none'
        tabContent[2].style.display = 'block'
    } else if (tabs[2].classList.contains('tab_content_item_active')) {
        tabs[2]++
        tabs[2].classList.remove('tab_content_item_active')
        tabs[3].classList.add('tab_content_item_active')
        tabContent[2].style.display = 'none'
        tabContent[3].style.display = 'block'
    } else if (tabs[3].classList.contains('tab_content_item_active')) {
        tabs[3]++
        tabs[3].classList.remove('tab_content_item_active')
        tabs[4].classList.add('tab_content_item_active')
        tabContent[3].style.display = 'none'
        tabContent[4].style.display = 'block'
    } else if (tabs[4].classList.contains('tab_content_item_active')) {
        tabs[4].classList.remove('tab_content_item_active')
        tabs[0].classList.add('tab_content_item_active')
        tabContent[4].style.display = 'none'
        tabContent[0].style.display = 'block'
    }
}

setInterval(startTabSlider, 10000)



// А здесь я повторил ваш код AutoSlider на main.js.

// const autoSlider = (index = 0) => {
//     setInterval(() => {
//         tabs[index].classList.remove('tab_content_item_active')
//         tabs[index++]
//         if (index > tabs.length - 1) {
//             index = 0
//         }
//         tabs[index].classList.add('tab_content_item_active')
//         hideTabContent()
//         showTabContent(index)
//     }, 1000)
// }
//
// autoSlider()

