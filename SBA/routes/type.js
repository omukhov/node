import express from "express";
const router = express.Router();

import types from "../data/type.js";
import error from "../utilities/error.js";

// Route for getting all types and provide (types) data
router.route("/").get((req, res) => {
  let resultTypes = types;

  res.render("type", {
    types: resultTypes,
  });
});

export default router;
