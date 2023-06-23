const express = require("express");
const exphbs = require("express-handlebars"); // exphbs is the name of the variable that's recomended in the doc
const session = require("express-session");
const routes = require("./routes");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers }); // hbs will return an object. // mostly for utility tools
// in order for helpers to work inside the handlebars, we will need to pass the helpers as a parameter inside the exphbs.create({});
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 600000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: false,
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(session(sessionConfig));
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
