import express from "express";
import methodOverride from "method-override";
import pokemons from "./routes/pokemon.js";
import trainers from "./routes/trainer.js";
import types from "./routes/type.js";
import error from "./utilities/error.js";

const app = express();
const port = 3000;

// Middleware express app for ability getting json files
app.use(express.json());
// Middleware express app for form
app.use(express.urlencoded({ extended: true }));
// Set ejs for views to express app
app.set("view engine", "ejs");
// Middleware express app for access to public folder express (css and images)
app.use(express.static("public"));
// Middleware from another npm library for change standard method in forms
// For create PUT, PATCH, DELETE because standard form can create only GET and POST
app.use(methodOverride("_method"));

// Custom middleware for logging
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

// Middleware for setting active class bootstrap inside menu.ejs
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Middleware for put data to routes
app.use("/pokemons", pokemons);
app.use("/trainers", trainers);
app.use("/types", types);

// Route for / and render index layout
app.get("/", (req, res) => {
  res.render("index");
});

// Route for 404 and render not found layout
app.use((req, res, next) => {
  res.status(404).render("not-found");
});

// Error middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
