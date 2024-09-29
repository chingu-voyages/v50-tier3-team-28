const userService = require('../services/userService');

exports.getUserDashboardInfo = async (req, res) => {
  const userId = req.auth.sub;
  // console.log(`ID: ${userId}`);
  const token = process.env.VITE_AUTH0_TOKEN;

  try {
    const userInfo = await userService.getUserInfo(userId, token);
    if (!userInfo.email_verified) {
      return res.status(403).json({ message: 'Email not verified' });
    }
    res.json({
      user: {
        name: userInfo.name,
        email: userInfo.email,
        userId: userInfo.user_id,
        emailVerified: userInfo.email_verified,
        gravatar: userInfo.picture,
        metadata: {
          contactNumber: userInfo.user_metadata?.contactNumber || null,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
};
