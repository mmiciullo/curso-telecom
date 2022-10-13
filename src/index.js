const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;
const app = express();

const Article = require("../models/article");
const articleRouter = require("../routes/articles");

const userRouter = require("../routes/users");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Ruta Principal Home obteniendo los articulos creados
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.render("articles/index", { articles: articles });
});

// Routes
app.use("/articles", articleRouter);
app.use("/users", userRouter);

app.use("/public", express.static('./public'));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Servidor esucchando en el puerto ${port}`);
});
