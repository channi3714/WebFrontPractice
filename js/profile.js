window.onload = function () {
    //-----------------------main nav bar---------------------------
    const toggleBtn = document.querySelector('.navbar_toggleBtn');
    const menu = document.querySelector('.navbar_menu');
    const links = document.querySelector('.navbar_user');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        links.classList.toggle('active');
    })
    //-----------------------mansory layout-------------------------
    var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        // columnWidth: 200
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20,
    });
    imagesLoaded('.grid').on('progress', function () {
        msnry.layout();
    });

}