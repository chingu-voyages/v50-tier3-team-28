const express = require('express');
const { jwtCheck } = require('../middleware/jwtMiddleware');
const router = express.Router();
const axios = require('axios');

const getUserInfo = async (userId, token) => {
  const url = `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${userId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

router.get('/', jwtCheck, async (req, res) => {
  const userId = req.auth.sub;
  console.log(`User ID: ${userId}`);
  const token = process.env.VITE_AUTH0_TOKEN;

  try {
    const userInfo = await getUserInfo(userId, token);
    res.json({
      message: `Hello, ${userInfo.name}! Your email is ${userInfo.email}.`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router;
