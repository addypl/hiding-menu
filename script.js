const nav = document.querySelector('nav');
let isScrolling, prevPos, currPos;

function afterScroll() {
    currPos = window.scrollY;

    if (currPos > prevPos) {
        nav.classList.add('nav--up');
    } else {
        nav.classList.remove('nav--up');
    }

    prevPos = currPos;
}

document.addEventListener('scroll', function () {
    isScrolling = true;
});

setInterval(function () {
    if (isScrolling) {
        afterScroll();
        isScrolling = false;
    }
}, 100);