
const navToggle = document.querySelector(".nav-toggler")
const links = document.querySelector(".navbar__menu")

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-navbar__menu")
})