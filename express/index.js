import express from "express";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));

const admin = { name: "Artem", age: 29 };
const users = ["Bob", "Alice", "John"];

app.get("/", (req, res) => {
  res.render("index", { admin, users });
});

app.get("/home", (req, res) => {
  res.render("index", { admin, users });
});

app.get("/user/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (id % 2 == 0) {
    return next(new Error("User not found"));
  }

  res.send("User exists");
});

app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Success");
});

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  next();
};

app.get("/download/:file", (req, res) => {
  const fileName = req.params.file;

  res.download(`./public/${fileName}`);
});

app.use(logger);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  res.status(500).send("Something went wrong");
};

app.use(errorHandler);
