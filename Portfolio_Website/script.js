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

// ---------------------------------------------------------------------------------------------------------------------------------------
//                                                  END OF JAVASCRIPT FOR INDEX
// ---------------------------------------------------------------------------------------------------------------------------------------


function showProjectDetails(projectNumber) {
    // Add logic to show detailed project view for the selected project
    // You can use AJAX, fetch, or other methods to load project details dynamically
    // For simplicity, let's just toggle the overlay for demonstration purposes
    document.getElementById('project-details-overlay').style.display = 'flex';
}

function hideProjectDetails() {
    // Add logic to hide detailed project view
    document.getElementById('project-details-overlay').style.display = 'none';
}

