


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
  let slides = document.getElementsByClassName("container_photos_box");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


 document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                slideIndex--;
                showSlides(slideIndex);
                break;
            case 39:
                e.preventDefault();
                slideIndex++;
                showSlides(slideIndex);
                break;
        }
    }


    