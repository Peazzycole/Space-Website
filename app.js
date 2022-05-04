// const toggleButton = document.querySelector('.mobile-nav-toggle');
// const navigation = document.querySelector('.primary-navigation')
// const view = document.querySelector('.view')
// const close = document.querySelector('close')

// toggleButton.addEventListener('click', () => {
//     navigation.classList.toggle('view')
//     // navigation.style.transform = `translate(100%)`
// })


const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const image = document.querySelector('.yeah')

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navToggle.style.backgroundImage = `url(./images/close.svg)`
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navToggle.style.backgroundImage = `url(./images/hamburger.svg)`
    }
})

