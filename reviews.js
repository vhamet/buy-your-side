const reviews = [
  {
    "name": "Maryam",
    "profession": "cadre HR internationale",
    "location": "Paris",
    "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus reprehenderit fugit iusto ex ipsam aperiam exercitationem. Nostrum aliquam porro minima quas eveniet praesentium tenetur dolore consectetur obcaecati? Odio, ullam!"
  },
  {
    "name": "Elisabeth & Didier",
    "profession": "retraités",
    "location": "Courbevois",
    "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellat dolores rem veritatis. Similique aliquam rerum ullam laudantium recusandae. Nemo reiciendis aliquid quisquam, voluptatem iste nisi nihil? Nesciunt sed, distinctio enim cum odit minima ut repellendus numquam dolorem magni sunt minus at veritatis incidunt obcaecati illo nemo esse, dolorum animi!"
  },
  {
    "name": "Elisabet & Didier",
    "profession": "retraités",
    "location": "Courbevois",
    "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellat dolores rem veritatis. Similique aliquam rerum ullam laudantium recusandae. Nemo reiciendis aliquid quisquam, voluptatem iste nisi nihil? Nesciunt sed, distinctio enim cum odit minima ut repellendus numquam dolorem magni sunt minus at veritatis incidunt obcaecati illo nemo esse, dolorum animi!"
  },
  {
    "name": "Elisabet & Didier",
    "profession": "retraités",
    "location": "Courbevois",
    "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellat dolores rem veritatis. Similique aliquam rerum ullam laudantium recusandae. Nemo reiciendis aliquid quisquam, voluptatem iste nisi nihil? Nesciunt sed, distinctio enim cum odit minima ut repellendus numquam dolorem magni sunt minus at veritatis incidunt obcaecati illo nemo esse, dolorum animi!"
  },
  {
    "name": "Elisabet & Didier",
    "profession": "retraités",
    "location": "Courbevois",
    "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellat dolores rem veritatis. Similique aliquam rerum ullam laudantium recusandae. Nemo reiciendis aliquid quisquam, voluptatem iste nisi nihil? Nesciunt sed, distinctio enim cum odit minima ut repellendus numquam dolorem magni sunt minus at veritatis incidunt obcaecati illo nemo esse, dolorum animi!"
  },
  {
    "name": "Elisabet & Didier",
    "profession": "retraités",
    "location": "Courbevois",
    "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellat dolores rem veritatis. Similique aliquam rerum ullam laudantium recusandae. Nemo reiciendis aliquid quisquam, voluptatem iste nisi nihil? Nesciunt sed, distinctio enim cum odit minima ut repellendus numquam dolorem magni sunt minus at veritatis incidunt obcaecati illo nemo esse, dolorum animi!"
  }
]

const createReviewCard = ({ name, profession, location, review }) => {
  const card = document.createElement('div')
  card.classList.add('review-card')

  const header = document.createElement('div')
  header.classList.add('review-card__header')
  header.textContent = `${name}, ${profession}, ${location}`
  card.appendChild(header)

  const content = document.createElement('div')
  content.classList.add('review-card__content')
  content.textContent = review
  card.appendChild(content)

  return card
}

let scrollAmount = 0
let container, chevronContainerRight, chevronContainerLeft, scrollMax, scrollWidth

const handleScrollLeft = () => {
  if (chevronContainerLeft.classList.contains("disabled")) return

  scrollAmount -= scrollWidth
  chevronContainerRight.classList.remove("disabled")
  if (scrollAmount <= 0)
    chevronContainerLeft.classList.add("disabled")

  container.scrollTo({
    top: 0,
    left: Math.max(scrollAmount, 0),
    behavior: 'smooth'
  })
}

const handleScrollRight = () => {
  console.log("IN SCROLL")
  if (chevronContainerRight.classList.contains("disabled")) return

  scrollAmount += scrollWidth
  chevronContainerLeft.classList.remove("disabled")
  if (scrollAmount >= scrollMax)
    chevronContainerRight.classList.add("disabled")

  container.scrollTo({
    top: 0,
    left: Math.min(scrollAmount, scrollMax),
    behavior: 'smooth'
  })
}

const handleContainerScroll = () => {
  if (container.scrollLeft >= scrollMax)
    chevronContainerRight.classList.add("disabled")
  else
    chevronContainerRight.classList.remove("disabled")

  if (container.scrollLeft <= 0)
    chevronContainerLeft.classList.add("disabled")
  else
    chevronContainerLeft.classList.remove("disabled")
}

document.addEventListener("DOMContentLoaded", function () {
  container = document.querySelector(".reviews__container")
  for (const review of reviews)
    container.appendChild(createReviewCard(review))

  scrollMax = container.scrollWidth - container.clientWidth
  scrollWidth = document.querySelector(".review-card").offsetWidth

  chevronContainerLeft = document.querySelector(".chevron-container-left")
  chevronContainerLeft.addEventListener("click", handleScrollLeft)

  chevronContainerRight = document.querySelector(".chevron-container-right")
  chevronContainerRight.addEventListener("click", handleScrollRight)

  container.addEventListener("scroll", handleContainerScroll)
})