function createGame(player1, hour, player2) {
  return `
    <li>
      <img
        src="./src/images/icon=${player1}.svg"
        alt="Bandeira do ${player1}"
      />
      <strong>${hour}</strong>
      <img
        src="./src/images/icon=${player2}.svg"
        alt="Bandeira da ${player2}"
      />
    </li>
  `
}

let delay = -0.1
function createCard(date, day, games) {
  delay += 0.1
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

let A1 = "1ºA"

document.querySelector("#cards").innerHTML =
  // 20/11
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  // 21/11
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("united states", "16:00", "wales")
  ) +
  // 22/11
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  // 23/11
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  // 24/11
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  // 25/11
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united states")
  ) +
  // 26/11
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  // 27/11
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  // 28/11
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  // 29/11
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "united states") +
      createGame("wales", "16:00", "england")
  ) +
  // 30/11
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +
  // 01/12
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  // 02/12
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  // 03/12
  createCard(
    "03/12",
    "sábado, 8ª de final",
    createGame("netherlands", "12:00", "united states") +
      createGame("argentina", "16:00", "australia")
  ) +
  // 04/12
  createCard(
    "04/12",
    "domingo, 8ª de final",
    createGame("denmark", "12:00", "poland") +
      createGame("england", "16:00", "senegal")
  ) +
  // 05/12
  createCard(
    "05/12",
    "segunda, 8ª de final",
    createGame("spain", "12:00", "croatia") +
      createGame("brazil", "16:00", "uruguay")
  ) +
  // 06/12
  createCard(
    "06/12",
    "terça, 8ª de final",
    createGame("belgium", "12:00", "germany") +
      createGame("portugal", "16:00", "serbia")
  ) +
  // 09/12
  createCard(
    "09/12",
    "sexta, 4ª de final",
    createGame("england", "12:00", "denmark") +
      createGame("netherlands", "16:00", "argentina")
  ) +
  // 10/12
  createCard(
    "10/12",
    "sábado, 4ª de final",
    createGame("belgium", "12:00", "portugal") +
      createGame("brazil", "16:00", "spain")
  ) +
  // 13/12
  createCard(
    "13/12",
    "terça, semi final",
    createGame("argentina", "16:00", "brazil") +
      createGame("england", "16:00", "belgium")
  ) +
  // 17/12
  createCard(
    "17/12",
    "sábado, 3º e 4º lugar",
    createGame("argentina", "12:00", "belgium")
  ) +
  // 18/12
  createCard(
    "18/12",
    "domingo, final",
    createGame("brazil", "12:00", "england")
  )
