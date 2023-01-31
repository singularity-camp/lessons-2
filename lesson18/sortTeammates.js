function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function sortTeammates() {
  const teams = [];

  const players = [
    "Adilkhan",
    "Kuandyk",
    "Bakhytzhan",
    "Miras",
    "Aldiyar",
    "Alyamdar",
  ];

  while (players.length > 0) {
    const i = getRandomInt(0, players.length);
    const [player] = players.splice(i, 1);

    if (
      Array.isArray(teams[teams.length - 1]) &&
      teams[teams.length - 1].length < 2
    ) {
      teams[teams.length - 1].push(player);
    } else {
      teams.push([player]);
    }
  }

  console.log(teams);
}

sortTeammates();
