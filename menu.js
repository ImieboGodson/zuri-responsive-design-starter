const toggleBtnOpen = document.getElementById('toggle-btn-open');
const dropdownMenu = document.getElementById('nav-links');
const menuLinks = document.querySelectorAll('.menu-links');

// Open and close the dropdown menu every time the toggle button is clicked
const toggleFunction = () => {
    dropdownMenu.classList.toggle('active');
}

// Closes the dropdown menu everytime a menu link is clicked
const closeFunction = () => {
    dropdownMenu.classList.remove('active');
}

// Eventlisteners
toggleBtnOpen.addEventListener('click', toggleFunction);

// Adds the click eventlistener to all the links in the dropdown menu
menuLinks.forEach( btn => btn.addEventListener('click', closeFunction));