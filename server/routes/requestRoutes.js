// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { validateRequest } = require("../validation/validation");
const Request = require("../models/Request");

router.post("/request", async (req, res) => {
    
    const { error } = validateRequest(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const request = new Request(req.body);
    await request.save();
    res.send(request);
  });

module.exports = router;
