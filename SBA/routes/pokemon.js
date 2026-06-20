import express from "express";
const router = express.Router();

import pokemons from "../data/pokemon.js";
import pokemonDetails from "../data/pokemon-info.js";
import types from "../data/type.js";
import error from "../utilities/error.js";

// Route /pokemons
router.route("/").get((req, res) => {
  const type = Number(req.query.type);
  let filteredPokemons = pokemons;

  // If user choose type pokemon, server'll give him new array (/pokemons?type=req.query.type)
  if (type) {
    filteredPokemons = pokemons.filter((p) => p.type.includes(type));
  }

  // Render pokemon.ejs and provide pokemons and types data to this ejs file
  res.render("pokemon", {
    pokemons: filteredPokemons,
    types,
  });
});

// Route for create pokemon
router.get("/new", (req, res) => {
  res.render("pokemon-create", { types });
});

// Post request for create new pokemon
router.post("/", (req, res, next) => {
  // Array.isArray - function for checking req.body.type is array
  const typesArray = Array.isArray(req.body.type)
    ? req.body.type
    : [req.body.type];

  const pokemon = {
    // If pokemons.length !== 0, we'll get last pokemon in an array see on his id and + 1 to id. else choose 1
    id: pokemons.length ? pokemons[pokemons.length - 1].id + 1 : 1,
    name: req.body.name,
    // Create new array and change type types of pokemon to number
    type: typesArray.map(Number),
    level: Number(req.body.level),
    hp: Number(req.body.hp),
    image: req.body.image,
    gif: req.body.gif,
  };

  pokemons.push(pokemon);

  return res.redirect("/pokemons");
});

// Route for get special pokemon, or patch special pokemon, or delete special pokemon
router
  .route("/:id")
  .get((req, res, next) => {
    const pokemonId = Number(req.params.id);
    const pokemon = pokemonDetails.find((pokemon) => pokemon.id === pokemonId);

    if (pokemonId)
      res.render("pokemon-info", {
        pokemon: pokemon,
      });
    else next();
  })
  .patch((req, res, next) => {
    const pokemon = pokemons.find((p, i) => {
      if (p.id == req.params.id) {
        // Loop for every key in req.body (name, hp, type)
        for (const key in req.body) {
          if (key === "type") {
            // Create array
            const types = Array.isArray(req.body.type)
              ? req.body.type
              : [req.body.type];

            // Assign type from new array types
            pokemons[i].type = types.map(Number);
          } else {
            // Assigh key (hp, name) from req.body[key]
            pokemons[i][key] = req.body[key];
          }
        }

        return true;
      }
    });

    if (pokemon) {
      return res.redirect("/pokemons");
    } else next();
  })
  .delete((req, res, next) => {
    const pokemon = pokemons.find((p, i) => {
      if (p.id == req.params.id) {
        pokemons.splice(i, 1);
        return true;
      }
    });

    if (pokemon) {
      return res.redirect("/pokemons");
    } else next();
  });

export default router;
