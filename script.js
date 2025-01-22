const hamburger = document.getElementById("hamburger");

const navmenu = document.querySelector(".nav-menu");
const navclose = document.querySelector("#nav-close");
const navbtn = document.querySelector(".nav-btn");

hamburger.addEventListener("click", function () {
  navmenu.style.display = "flex";
  navbtn.style.display = "flex";
});

navclose.addEventListener("click", function () {
  navmenu.style.display = "none";
});

// if windowsize greater than 768

if (window.innerWidth >= 768) {
  const choosePlan = document.querySelector(".choose-plan-cards-container");
  choosePlan.classList.remove("slider");
}

//Sliders 1

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

//Sliders 2

$(".trusted-cards-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        centermode: true,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
      },
    },
  ],
});
