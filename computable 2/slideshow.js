let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "inline-block"; 
                    
    setTimeout(showSlides, 15000);
}

/*
let slideIndex = 0;
showSlides();

function showSlides() {
    let checkBox = document.getElementById("auto");
    if (checkBox.checked) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "inline-block";  
                    
    setTimeout(showSlides, 15000);
    } else {
        setTimeout(showSlides, 15000);
    }
}
*/