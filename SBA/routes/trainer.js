import express from "express";
const router = express.Router();

import trainers from "../data/trainer.js";
import trainersDetails from "../data/trainer-info.js";
import pokemons from "../data/pokemon.js";
import error from "../utilities/error.js";

router.route("/").get((req, res) => {
  // const userId = Number(req.query.userId);
  // const postId = Number(req.query.postId);
  // const filteredCommentsByUserId = comments.filter(
  //   (c) => userId === c.userId,
  // );
  // const filteredCommentsByPostId = comments.filter(
  //   (c) => postId === c.postId,
  // );

  let resultTrainers = trainers;

  // if (filteredCommentsByUserId.length !== 0) {
  //   resultComments = filteredCommentsByUserId;
  // } else if (filteredCommentsByPostId.length !== 0) {
  //   resultComments = filteredCommentsByPostId;
  // } else {
  //   resultComments = comments;
  // }

  res.render("trainer", {
    trainers: resultTrainers,
    pokemons: pokemons,
  });
});
//   .post((req, res, next) => {
//     if (req.body.userId && req.body.postId && req.body.body) {
//       const comment = {
//         id: comments.length ? comments[comments.length - 1].id + 1 : 1,
//         userId: req.body.userId,
//         postId: req.body.postId,
//         body: req.body.body,
//       };

//       comments.push(comment);
//       res.json(comments[comments.length - 1]);
//     } else next(error(400, "Insufficient Data"));
//   });

router.route("/:id").get((req, res, next) => {
  const trainer = trainersDetails.find((t) => t.id == req.params.id);

  if (trainer)
    res.render("trainer-info", {
      trainer: trainer,
    });
  else next();
});
//   .patch((req, res, next) => {
//     const comment = comments.find((c, i) => {
//       if (c.id == req.params.id) {
//         for (const key in req.body) {
//           comments[i][key] = req.body[key];
//         }
//         return true;
//       }
//     });

//     if (comment) res.json(comment);
//     else next();
//   })
//   .delete((req, res, next) => {
//     const comment = comments.find((c, i) => {
//       if (c.id == req.params.id) {
//         comments.splice(i, 1);
//         return true;
//       }
//     });

//     if (comment) res.json(comment);
//     else next();
//   });

export default router;
