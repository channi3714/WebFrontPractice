window.onload = function () {

    const toggleBtn = document.querySelector('.navbar_toggleBtn');
    const menu = document.querySelector('.navbar_menu');
    const links = document.querySelector('.navbar_user');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        links.classList.toggle('active');
    })
}