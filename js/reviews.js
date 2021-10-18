const reviews = [
  {
    "name": "Maryam",
    "profession": "Cadre HR internationale",
    "location": "Paris",
    "review": `Au cours des 15 derniers mois, j'étais très motivée et bien décidée à trouver l'appartement de mes rêves à Paris.
    J'ai étudié le sujet, rencontré un courtier pour connaître mon budget et commencé à recenser mes principaux critères. Pendant les 9 premiers mois, j'ai compté sur les annonces en ligne et les agences et j'ai visité une quinzaine d'appartements dans différents quartiers de Paris et je n'ai trouvé aucun coup de cœur malgré mon budget relativement généreux.
    J'ai alors décidé de travailler avec un chasseur d'appartements qu'un ami m'avait recommandé en espérant gagner du temps et être accompagnée efficacement. 
    La personne m'a montré environ 20 appartements en seulement 2 mois mais aucun d'entre eux ne correspondait complètement à mes critères. Après de nombreuses frustrations j’ai compris que les annonces n’étaient pas soigneusement sélectionnées. Ce chasseur m’a vraiment fait perdre mon temps.
    J'ai annulé leur contact au bout des 2 mois et alors que j'étais désespérée, Stéphanie a pris le relai. 
    Elle a tout de suite compris mes critères et m'a montré 2 appartements dont l'un a été un véritable coup de cœur dans lequel je me voyais vivre pour longtemps. Non seulement elle a finement sélectionné les annonces après une recherche complète en fonction de mes seuls critères et besoins personnels, mais en plus elle est restée présente et disponible pour tous les conseils dont j'ai eu besoin à chaque étape du processus, de la prise de décision à la signature finale ✍️
    Je ne peux pas être plus reconnaissante de ce véritable accompagnement à la fois personnalisé et professionnel et je recommanderai fortement le vrai service de « BUY YOUR SIDE ».`
  },
  {
    "name": "Elisabeth et Didier",
    "profession": "Retraités",
    "location": "",
    "review": `Ayant vendu notre maison sur Antony, nous étions à la recherche d’un appartement sur Courbevoie (à proximité de notre fils unique). Notre souhait était de trouver un appartement avec terrasse pour conserver un espace extérieur.
    Sur le conseil familial nous avons collaboré avec Stéphanie se positionnant comme “chasseur d’appartement” à notre grande satisfaction.
    Nous avons rencontré une véritable professionnelle, à l’écoute et respectueuse de nos besoins, de plus avec un relationnel sympathique, généreux.
    Elle a su, durant cette période, nous soutenir lors des moments de doutes ou de découragement.
    Avec Stéphanie nous avons été les premiers à visiter un appartement qui répondait à bon nombre de nos critères. Elle a su nous convaincre de faire une offre d’achat. Aujourd’hui, nous sommes ravis de ce choix et des conseils qu’elle nous a promulgués. 
    Nous ne pouvons que recommander de faire appel à cette professionnelle. 
    `
  },
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

  scrollAmount = container.scrollLeft
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