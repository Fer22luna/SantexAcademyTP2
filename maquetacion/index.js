window.onscroll = function () {
    const volverHome = document.querySelector('.volver-home');
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        volverHome.style.display = 'block';
    } else {
        volverHome.style.display = 'none';
    }
}

