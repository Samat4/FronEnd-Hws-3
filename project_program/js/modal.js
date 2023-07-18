// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

const autoOpenModal = setTimeout(openModal, 10000)

if (modal.style.display === 'block') {
    clearTimeout(autoOpenModal)
}

const scroll = () => {
    if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scroll)
    }
}

window.addEventListener('scroll', scroll)