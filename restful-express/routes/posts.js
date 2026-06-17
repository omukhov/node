import express from "express";
const router = express.Router();

import posts from "../data/posts.js";
import comments from "../data/comments.js";
import error from "../utilities/error.js";

router
  .route("/")
  .get((req, res) => {
    const userId = Number(req.query.userId);
    const filteredPosts = posts.filter((p) => userId === p.userId);
    const links = [
      {
        href: "posts/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    const resultPosts = userId ? filteredPosts : posts;

    res.json({ resultPosts, links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router.route("/:id/comments").get((req, res) => {
  const userId = Number(req.query.userId);
  const postComments = comments.filter(
    (c) => Number(req.params.id) === c.postId,
  );
  const filteredComments = postComments.filter((pc) => userId === pc.userId);

  const resultComments = userId ? filteredComments : postComments;

  res.json({
    message: resultComments,
  });
});

router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];

    if (post) res.json({ post, links });
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

export default router;
