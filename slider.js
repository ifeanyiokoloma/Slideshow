var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translate(-100%)";
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.transform = "translate(0)";
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
const autoSlide = () => {
  let slideTimer;
  const slideContainer = document.getElementById("slideshow-container");

  slideTimer = setInterval(function () {
    console.log("works");
    plusSlides(1);
  }, 6000); // 6 seconds

  slideContainer.addEventListener("mouseenter", async () => {
    // console.log("clears");
    clearInterval(slideTimer);
  });

  slideContainer.addEventListener("mouseleave", async () => {
    slideTimer = setInterval(function () {
      // console.log("works");
      plusSlides(1);
    }, 6000); // 6 seconds
  });
};

autoSlide();
