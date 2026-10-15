const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const next =
    document.getElementById("next");

const prev =
    document.getElementById("prev");


let currentSlide = 0;


/* ================= SLIDER ================= */

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

}


/* PRÓXIMO */

function nextSlide() {

    let index =
        currentSlide + 1;

    if (index >= slides.length) {

        index = 0;

    }

    showSlide(index);

}


/* ANTERIOR */

function previousSlide() {

    let index =
        currentSlide - 1;

    if (index < 0) {

        index = slides.length - 1;

    }

    showSlide(index);

}


next.addEventListener(
    "click",
    nextSlide
);


prev.addEventListener(
    "click",
    previousSlide
);


/* DOTS */

dots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showSlide(index);

            }
        );

    }
);


/* ROTAÇÃO AUTOMÁTICA */

setInterval(
    nextSlide,
    5000
);