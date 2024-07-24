// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { validateUser } = require("../validation/validation");
const User = require("../models/User");

router.post("/user", async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

module.exports = router;
