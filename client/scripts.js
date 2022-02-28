const cont = document.querySelector('#contacts');
const talk = document.querySelector('#talk');


document.querySelector('#navbar-toggler').addEventListener('click', handleToggler)

window.onload = function() {
    if (window.innerWidth < 768) talk.style = 'display: none !important;'
}

const messages = document.querySelector("#display-messages");
messages.scrollTo(0, messages.scrollHeight);

window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) {
            cont.style = ''
            talk.style = ''
    } else {
        handleToggler()
    }
})

function handleToggler() {
    const resultClass = cont.classList.toggle('non-view');

    if (resultClass) {
        talk.style = ''
        cont.style = 'display: none !important;'
    } else {
        talk.style = 'display: none !important;'
        cont.style = ''
    }
}
