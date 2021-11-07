const reviews = [
  {
    "name": "Maryam",
    "profession": "Cadre HR internationale",
    "location": "Paris",
    "review": `Après 15 mois de recherches infructueuses, j’ai décidé de travailler avec un chasseur d'appartements (pas Buy Your Side !) qu'un ami m'avait recommandé en espérant être accompagnée efficacement. La chasseuse m'a montré une vingtaine d’appartements en seulement 2 mois mais aucun d'entre eux ne correspondait complètement à mes critères. J’ai compris que les annonces n’étaient tout simplement pas soigneusement sélectionnées et je perdais mon temps au lieu d’en gagner. J’ai fini par annuler leur contrat et alors que j'étais désespérée, Stéphanie a pris le relai. Elle a tout de suite compris mes critères et ne m'a montré que 2 appartements dont l'un a été un véritable coup de cœur.  Elle est par la suite restée présente et disponible pour tous les conseils dont j'ai eu besoin à chaque étape, de la prise de décision à la signature finale. Je ne peux pas être plus reconnaissante de ce véritable accompagnement à la fois personnalisé et professionnel et je recommande fortement le vrai service de « BUY YOUR SIDE ».
    `
  },
  {
    "name": "Elisabeth et Didier",
    "profession": "Retraités",
    "location": "Courbevoie",
    "review": `Ayant vendu notre maison, nous étions à la recherche d’un appartement à proximité de notre fils unique. Notre souhait était de trouver un appartement avec terrasse pour conserver un espace extérieur. Sur un conseil familial nous avons collaboré avec Stéphanie à notre grande satisfaction. Nous avons rencontré une véritable professionnelle, à l’écoute et respectueuse de nos besoins, de plus avec un relationnel sympathique et généreux. Elle a su, durant cette période, nous soutenir lors des moments de doutes ou de découragement. Avec Stéphanie nous avons été les premiers à visiter un appartement qui répondait à bon nombre de nos critères. Aujourd’hui, nous sommes ravis de ce choix et des conseils qu’elle nous a promulgués. Nous ne pouvons que recommander de faire appel à cette professionnelle.
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