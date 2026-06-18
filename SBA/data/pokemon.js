const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: [1],
    level: 25,
    hp: 120,
    image:
      "https://imgc.allpostersimages.com/img/posters/gallery-pops-pokemon-1996-pikachu-waving-pose-wall-art_u-l-fabdx20.jpg?artHeight=550&artPerspective=y&artWidth=550&dodropshadow=1&background=ffffff",
    gif: "https://media.tenor.com/UZJd1pjj4NMAAAAC/surprised-pikachu.gif",
  },
  {
    id: 2,
    name: "Charizard",
    type: [2, 3],
    level: 42,
    hp: 210,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png",
    gif: "https://i.pinimg.com/originals/76/f4/58/76f458f8b83deb0e2b927c451e74c134.gif",
  },
  {
    id: 3,
    name: "Blastoise",
    type: [4],
    level: 40,
    hp: 225,
    image: "https://img.pokemondb.net/artwork/large/blastoise.jpg",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyamNsNnVvZGZ2azBmdTU0dHIzMHRlczY0dTMwamRteXFqbm56bzI2aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tDT5nL8EXbQhW/source.gif",
  },
  {
    id: 4,
    name: "Venusaur",
    type: [5, 6],
    level: 38,
    hp: 220,
    image: "https://img.pokemondb.net/artwork/large/venusaur.jpg",
    gif: "https://i.pinimg.com/originals/87/2c/4f/872c4f9e3c164a034b4a15ba1c6ef084.gif",
  },
  {
    id: 5,
    name: "Gengar",
    type: [6, 7],
    level: 35,
    hp: 180,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png",
    gif: "https://media.tenor.com/rZhnx0C79YYAAAAM/gengar-dance.gif",
  },
  {
    id: 6,
    name: "Dragonite",
    type: [3, 8],
    level: 50,
    hp: 260,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Dragonite.png",
    gif: "https://media.tenor.com/vTNxZtc3EoMAAAAC/dragonite-pokemon.gif",
  },
  {
    id: 7,
    name: "Snorlax",
    type: [9],
    level: 33,
    hp: 320,
    image:
      "https://i.ebayimg.com/00/s/MTMwN1gxNjAw/z/nNgAAOSwXfpZ4rHr/$_57.JPG?set_id=8800005007",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyNXViZTB4bmhqYXZtMWZzcmthamVndXN1dzRhNHV6aXpmM3pnM2RhaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CXaDzPow0SJqM/giphy.gif",
  },
  {
    id: 8,
    name: "Lucario",
    type: [10, 11],
    level: 37,
    hp: 190,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/4/42/0448Lucario.png/640px-0448Lucario.png",
    gif: "https://i.pinimg.com/originals/16/5a/85/165a85e6ddfc14b31782a01ab29406bd.gif",
  },
  {
    id: 9,
    name: "Jigglypuff",
    type: [9, 12],
    level: 18,
    hp: 110,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/800px-0039Jigglypuff.png",
    gif: "https://i.pinimg.com/originals/17/81/a1/1781a138e4417b7fba241dfc90a54225.gif",
  },
  {
    id: 10,
    name: "Machamp",
    type: [10],
    level: 41,
    hp: 240,
    image: "https://img.pokemondb.net/artwork/large/machamp.jpg",
    gif: "https://superherojacked.b-cdn.net/wp-content/uploads/2019/09/Machamp-Workout-4.gif",
  },
  {
    id: 11,
    name: "Alakazam",
    type: [13],
    level: 39,
    hp: 150,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyano0YnZzeWY0NjBuNThjNmNsOWwzbDRmMzJqaGl0NXFsZHVjeWhqdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5QHJTEsnbIFDts3bk6/giphy.gif",
  },
  {
    id: 12,
    name: "Onix",
    type: [14, 15],
    level: 28,
    hp: 170,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2qrGESEiOyJdwcudVBU_TuaLuYt5vASRg58LWeBB4w&s=10",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUycmxveXFkYjBkM2pwdnMyc2NxdXI5MzRrYjExaXQ5dXVndGlibnh5cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nxm0rTyqnzv1K/giphy.gif",
  },
  {
    id: 13,
    name: "Lapras",
    type: [4, 16],
    level: 34,
    hp: 230,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/131.png",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyZmxleDBsNnoxczB6YThua3BhejlwcGM5MnZ4cjd2MzhxNzBxcnlmZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3vEJiMNgR6cik/source.gif",
  },
  {
    id: 14,
    name: "Eevee",
    type: [9],
    level: 20,
    hp: 95,
    image: "https://img.pokemondb.net/artwork/large/eevee.jpg",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUydW9rZ2I0Z2s1Zjg1dnFkdDkyOGU4aGw0cmJjeDhjd3FrcWw1Zjg3NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/133cAiXr4T1te/giphy.gif",
  },
];

export default pokemons;
