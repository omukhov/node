import express from "express";
const router = express.Router();

import pokemons from "../data/pokemon.js";
import pokemonDetails from "../data/pokemon-info.js";
import types from "../data/type.js";
import error from "../utilities/error.js";

router.route("/").get((req, res) => {
  const type = Number(req.query.type);
  let filteredPokemons = pokemons;

  if (type) {
    filteredPokemons = pokemons.filter((p) => p.type.includes(type));
  }

  res.render("pokemon", {
    pokemons: filteredPokemons,
    types,
  });
});

router.get("/new", (req, res) => {
  res.render("pokemon-create", { types });
});

router.post("/", (req, res, next) => {
  const typesArray = Array.isArray(req.body.type)
    ? req.body.type
    : [req.body.type];

  const pokemon = {
    id: pokemons.length ? pokemons[pokemons.length - 1].id + 1 : 1,
    name: req.body.name,
    type: typesArray.map(Number),
    level: Number(req.body.level),
    hp: Number(req.body.hp),
    image: req.body.image,
    gif: req.body.gif,
  };

  pokemons.push(pokemon);

  return res.redirect("/pokemons");
});

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
        for (const key in req.body) {
          if (key === "type") {
            const types = Array.isArray(req.body.type)
              ? req.body.type
              : [req.body.type];

            pokemons[i].type = types.map(Number);
          } else {
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
