const express = require("express");
// const routes = require('./routes');
const sequelize = require("./config/connection");


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(routes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
// // Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
