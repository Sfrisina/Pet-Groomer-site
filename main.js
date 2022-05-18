const toggleButton = document.getElementsByClassName('toggle-button')[0]
const siteNavLinks = document.getElementsByClassName('siteNavBar')[0]

toggleButton.addEventListener('click', () => {
    siteNavLinks.classList.toggle('active')
} )



const clicker = document.getElementsByClassName('clicker')[0]
const hiddenLinks = document.querySelectorAll('.hiddenList')[0]

clicker.addEventListener('click', () => {
    hiddenLinks.classList.toggle('active')
})