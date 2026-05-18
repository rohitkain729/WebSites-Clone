function horizontalScrollElement() {
  const buttonRight = document.querySelector(".arrow-right-btn");
  const buttonLeft = document.querySelector(".arrow-left-btn");
  const scrollContainer = document.querySelector(".scroll-container");

  buttonRight.onclick = function () {
    scrollContainer.scrollLeft += 300;
  };
  buttonLeft.onclick = function () {
    scrollContainer.scrollLeft -= 300;
  };
}

horizontalScrollElement();
