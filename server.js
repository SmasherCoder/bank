const express = require("express");
const routes = require('./controllers');
const User = require('./models/User');
const Accountdetails = require('./models/Accountdetails');
const Transaction = require('./models/Transaction');
const sequelize = require('./config/connection.js');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(require('./controllers/'));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});