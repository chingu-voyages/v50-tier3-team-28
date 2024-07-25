const express = require('express');
const { updateOrDeleteMetadata } = require('../controllers/userController');
const router = express.Router();

router.patch('/metadata', updateOrDeleteMetadata);
// router.delete('/metadata', deleteMetadata);

module.exports = router;

// // routes/userRoutes.js
// const express = require("express");
// const router = express.Router();
// const { validateUser } = require("../validation/validation");
// const User = require("../models/User");

// router.post("/user", async (req, res) => {
//     const { error } = validateUser(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     const user = new User(req.body);
//     await user.save();
//     res.send(user);
// });

// module.exports = router;
