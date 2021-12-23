const router = require("express").Router();
// const { User } = require('../../models');

// GET /api/users
// router.get('/', (req, res) => {
//     // Access our User model and run .findAll() method)
//     User.findAll()
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// // GET /api/users/1
// router.get('/:id', (req, res) => {});

// POST /api/users
// router.post('/', (req, res) => {
//     User.create({
//       username: req.body.username,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       password: req.body.password
//     })
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;