const toggleBtnOpen = document.getElementById('toggle-btn-open');
const toggleBtnClose = document.getElementById('toggle-btn-close');
const dropdownMenu = document.getElementById('nav-links');
const menuLinks = document.querySelectorAll('.menu-links');


const toggleFunction = () => {
    dropdownMenu.classList.toggle('active');
}

const toggleClose = () => {
    dropdownMenu.classList.remove('active');
}

toggleBtnOpen.addEventListener('click', toggleFunction);

toggleBtnClose.addEventListener('click', toggleFunction);

menuLinks.forEach( btn => btn.addEventListener('click', toggleClose));