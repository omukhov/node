import express from "express";
const router = express.Router();

import trainers from "../data/trainer.js";
import trainersDetails from "../data/trainer-info.js";
import pokemons from "../data/pokemon.js";
import error from "../utilities/error.js";

// Route for getting all trainers and provide data (trainers, pokemons)
router.route("/").get((req, res) => {
  let resultTrainers = trainers;

  res.render("trainer", {
    trainers: resultTrainers,
    pokemons: pokemons,
  });
});

// Route for getting special trainer and render trainer-info layout
router.route("/:id").get((req, res, next) => {
  const trainer = trainersDetails.find((t) => t.id == req.params.id);

  if (trainer)
    res.render("trainer-info", {
      trainer: trainer,
    });
  else next();
});

export default router;
