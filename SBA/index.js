import express from "express";

import pokemons from "./routes/pokemon.js";
import trainers from "./routes/trainer.js";
import types from "./routes/type.js";

import error from "./utilities/error.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`,
  );
  if (Object.keys(req.body || {}).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Use our Routes
app.use("/pokemons", pokemons, types);
app.use("/trainers", trainers);
app.use("/types", types);

app.get("/", (req, res) => {
  // res.json({
  //   links: [
  //     {
  //       href: "/",
  //       rel: "",
  //       type: "GET",
  //     },
  //     {
  //       href: "/pokemons",
  //       rel: "pokemons",
  //       type: "GET",
  //     },
  //     {
  //       href: "/pokemons",
  //       rel: "pokemons",
  //       type: "POST",
  //     },
  //     {
  //       href: "/trainers",
  //       rel: "trainers",
  //       type: "GET",
  //     },
  //     {
  //       href: "/trainers",
  //       rel: "trainers",
  //       type: "POST",
  //     },
  //   ],
  // });
  res.render("index");
});

// app.get("/pokemons", (req, res) => {
//   res.render("pokemon");
// });

// app.get("/trainers", (req, res) => {
//   res.render("trainer");
// });

// app.get("/types", (req, res) => {
//   res.render("type");
// });

app.use((req, res, next) => {
  res.status(404).render("not-found");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
