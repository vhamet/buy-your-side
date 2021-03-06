let scrollAmount = 0;
let container,
  chevronContainerRight,
  chevronContainerLeft,
  scrollMax,
  scrollWidth;

const handleScrollLeft = () => {
  if (chevronContainerLeft.classList.contains("disabled")) return;

  scrollAmount -= scrollWidth;
  chevronContainerRight.classList.remove("disabled");
  if (scrollAmount <= 0) chevronContainerLeft.classList.add("disabled");

  container.scrollTo({
    top: 0,
    left: Math.max(scrollAmount, 0),
    behavior: "smooth",
  });
};

const handleScrollRight = () => {
  if (chevronContainerRight.classList.contains("disabled")) return;

  scrollAmount += scrollWidth;
  chevronContainerLeft.classList.remove("disabled");
  if (scrollAmount >= scrollMax)
    chevronContainerRight.classList.add("disabled");

  container.scrollTo({
    top: 0,
    left: Math.min(scrollAmount, scrollMax),
    behavior: "smooth",
  });
};

const handleContainerScroll = () => {
  if (container.scrollLeft >= scrollMax)
    chevronContainerRight.classList.add("disabled");
  else chevronContainerRight.classList.remove("disabled");

  if (container.scrollLeft <= 0) chevronContainerLeft.classList.add("disabled");
  else chevronContainerLeft.classList.remove("disabled");

  scrollAmount = container.scrollLeft;
};

document.addEventListener("DOMContentLoaded", function () {
  container = document.querySelector(".reviews__container");
  for (const review of reviews) container.appendChild(createReviewCard(review));

  scrollMax = container.scrollWidth - container.clientWidth;
  scrollWidth = document.querySelector(".review-card").offsetWidth + 30;

  chevronContainerLeft = document.querySelector(".chevron-container-left");
  chevronContainerLeft.addEventListener("click", handleScrollLeft);

  chevronContainerRight = document.querySelector(".chevron-container-right");
  chevronContainerRight.addEventListener("click", handleScrollRight);

  container.addEventListener("scroll", handleContainerScroll);
});
