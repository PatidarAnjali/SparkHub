// Home - Featured Stories
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Buttons - Together 
function homebox1func() {
    window.location.replace("https://volunteer.ca/covid19");
}
function homebox2func() {
    window.location.replace("https://www.canadahelps.org/en/donate-to-coronavirus-outbreak-response/");
}
function homebox3func() {
    window.location.replace("https://www.lung.org/lung-health-diseases/lung-disease-lookup/covid-19/about-covid-19");
}
// Fact Generator
var factList = [
    "Nearly all the ingredients in COVID-19 vaccines are also ingredients in many foods – fats, sugars, and salts",
    "The COVID-19 vaccine will not affect fertility",
    "Getting vaccinated provides greater protection to others since the vaccine helps reduce the spread of COVID-19",
    "The vaccine for COVID-19 cannot and will not give you COVID-19",
    "COVID-19 vaccines do not change or interact with your DNA in any way",
    "The COVID-19 vaccines are designed to help your body’s immune system fight the coronavirus",
];

var factBtn = document.getElementById("factBtn");
var fact = document.getElementById("fact");
var count = 0;
if (factBtn) {
    factBtn.addEventListener("click", displayFact);
}
function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length) {
        count = 0;
    }
}
// Return to top
topbutton = document.getElementById("topBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// About Page
