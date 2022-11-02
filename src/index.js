const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3000;
const app = express();

const Article = require("../models/article");
const articleRouter = require("../routes/articles");

const userRouter = require("../routes/users");

// Passport config
require("../config/passport");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// Session middleware
app.use(cookieParser("secretSession"));
app.use(
  session({
    // secret: propiedad para que cada sessión sea guardada de manera única
    secret: "secretSession",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Flash msg
app.use(flash());
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  next();
});
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
