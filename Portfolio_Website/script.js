document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const spans = document.querySelectorAll('.intro-text span');
let index = 0;

function displayIntroText() {
    if (index < spans.length) {
        spans[index].classList.add('animation');
        index++;
        setTimeout(displayIntroText, 500);
    }
}

window.addEventListener('load', function () {
    displayIntroText();
});
