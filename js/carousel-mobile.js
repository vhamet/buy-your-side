let currentReview = 0
const max = reviews.length - 1
let container, chevronContainerRight, chevronContainerLeft, card

const handleScrollLeft = () => {
  currentReview = Math.max(0, currentReview - 1)
  const newCard = createReviewCard(reviews[currentReview])
  container.replaceChild(newCard, card)
  card = newCard

  chevronContainerRight.classList.remove("disabled")
  if (currentReview === 0)
    chevronContainerLeft.classList.add("disabled")
}

const handleScrollRight = () => {
  currentReview = Math.min(max, currentReview + 1)
  const newCard = createReviewCard(reviews[currentReview])
  container.replaceChild(newCard, card)
  card = newCard

  chevronContainerLeft.classList.remove("disabled")
  if (currentReview === max)
    chevronContainerRight.classList.add("disabled")
}

document.addEventListener("DOMContentLoaded", function () {
  container = document.querySelector(".reviews__container")
  card = createReviewCard(reviews[0])
  container.appendChild(card)

  chevronContainerLeft = document.querySelector(".chevron-container-left")
  chevronContainerLeft.addEventListener("click", handleScrollLeft)

  chevronContainerRight = document.querySelector(".chevron-container-right")
  chevronContainerRight.addEventListener("click", handleScrollRight)
})