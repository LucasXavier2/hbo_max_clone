const navbar = document.getElementsByClassName('topNavbar')[0];
const scrollLimit = 210 //solid color after this y position

document.addEventListener('scroll', function(e) {
    let scrollPosition = window.scrollY;

    if (scrollPosition < scrollLimit) {
        let bgOpacity = scrollPosition / scrollLimit;
        navbar.style.backgroundColor = 'rgba(0,0,0,0.3)'.replace(/[^,]+(?=\))/, bgOpacity)
    } else {
        navbar.style.backgroundColor = 'black';
    }
});