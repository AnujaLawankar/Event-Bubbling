var carousel = document.querySelector(".carouselbox");

var prevbtn = document.querySelector(".prev");

var nextbtn = document.querySelector(".next");

var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200') ";

function navigation(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }

  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

nextbtn.addEventListener("click", function (event) {
  event.stopPropagation();
  navigation(1);
});

prevbtn.addEventListener("click", function (event) {
  event.stopPropagation();
  navigation(-1);
});

navigation(0);
