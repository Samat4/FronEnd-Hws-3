// 1

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest() // 1 создание запроса
    xhr.open('GET','users.json') // 2. обьявление метода запроса и указывание пути
    xhr.setRequestHeader('Content-type', 'application/json') // 3. указывание заголовка
    xhr.send() // 4. отправка запроса
    xhr.addEventListener('load', () => {  // 5. обработка запроса

        const users = JSON.parse(xhr.response)

        const usersTag = document.querySelector('.users')

        users.forEach((user, userID) => {
            const userCard = document.createElement('div')
            userCard.setAttribute('class', 'userCard')

            userCard.innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
                <h2>${user.name} № ${userID + 1}</h2>
                <span>age: ${user.age}</span>
            `

            usersTag.append(userCard)
        })
    })
    btn.disabled = true
})

// 2

const secondBtn = document.querySelector('.secondBtn')

secondBtn.addEventListener('click', () => {
    const secondXhr = new XMLHttpRequest()
    secondXhr.open('GET', 'countries.json')
    secondXhr.setRequestHeader('Content-type', 'application/json')
    secondXhr.send()
    secondXhr.addEventListener('load', () => {
        const countries = JSON.parse(secondXhr.response)
        for (const countriesKey in countries) {
            console.log(countries[countriesKey])
        }
    })
    secondBtn.disabled = true
})
