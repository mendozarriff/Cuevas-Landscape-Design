
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function creates dots at bottom of slide show on mobile and creates
// thumbnails on desktop
function showSlides(n) {
  var i;
  var desktopD;
  var mobileD;
  var slideShow;
  var slides = document.getElementsByClassName("mySlides");
  mobileSD = document.getElementsByClassName("mobile-slide-show");
  desktopSD = document.getElementsByClassName("desktop-slide-show");
// checks to see if the screen is mobile or desktop
  if(window.outerWidth <= 968 ){
    slideShow = mobileSD;
  }else{
    slideShow = desktopSD;
  }
  if (n > slides.length){slideIndex = 1;}
  if (n < 1){slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < slideShow.length; i++) {
      slideShow[i].className = slideShow[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slideShow[slideIndex-1].className += " active";
}
