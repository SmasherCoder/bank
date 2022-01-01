const express = require("express");
// const routes = require('./routes');
const User = require('./models/User');
const Accountdetails = require('./models/Accountdetails');
const Transaction = require('./models/Transaction');
const sequelize = require('./config/connection.js');

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

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});