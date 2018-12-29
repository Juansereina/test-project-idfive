const openButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('close');
openButton.addEventListener('click', () => {
    menu.classList.add("show-menu")
});
closeButton.addEventListener('click', () => {
    menu.classList.remove("show-menu")
});