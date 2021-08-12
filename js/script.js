// -----------------------------------BtnUp------------------------------------------
let aboutOffset = $("#aboutCompany").offset().top;

$(window).scroll(function()
{
    let wScroll = $(window).scrollTop(); 
    if(wScroll > aboutOffset-20)
    {
        $('#scroll-top').css("display" , "inline");
        $("#scroll-top").fadeIn(500);

    }
    else
    {
        $("#scroll-top").fadeOut(500);
    }
})

$("#scroll-top").click(function ()
{
    $("html , body").animate({scrollTop:0} , 2000);
});
// -----------------------------------EndBtnUp-----------------------------------------

// -----------------------------------Gallery------------------------------------------

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// -----------------------------------endGallery------------------------------------------

// ----------------------------------------AOS---------------------------------------------
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}
$(window).on('load', function() {
  aos_init();
});
// ----------------------------------------AOS---------------------------------------------

// ----------------------------------------CounterUP---------------------------------------
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});
