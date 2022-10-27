const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const port = process.env.PORT || 3000;
const app = express();

const Article = require("../models/article");
const articleRouter = require("../routes/articles");

const userRouter = require("../routes/users");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    // secret: propiedad para que cada sessión sea guardada de manera única
    secret: "secretSession",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

// Ruta Principal Home obteniendo los articulos creados
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.render("articles/index", { articles: articles });
});

// Articles Routes
app.use("/articles", articleRouter);
app.use("/public", express.static("./public"));

// Users Routes

app.use("/users", userRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Servidor esucchando en el puerto ${port}`);
});
