const axios = require('axios');
const User = require('../models/User');

exports.getUserInfo = async (userId, token) => {
  const url = `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${userId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userInfo = response.data;
    await User.findOneAndUpdate(
      { userId: userInfo.user_id },
      {
        name: userInfo.name,
        email: userInfo.email,
        userName: userInfo.user_metadata?.userName || null,
        contactNumber: userInfo.user_metadata?.contactNumber || null,
      },
      { upsert: true, new: true }
    );
    return userInfo;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};
exports.updateOrDeleteUserMetadata = async (userId, token, metadata) => {
  const url = `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${userId}`;
  // Set fields to null to delete them if they are explicitly set to null in the request
  const updatedMetadata = {};
  for (const key in metadata) {
    if (metadata[key] === null) {
      updatedMetadata[key] = null;
    } else {
      updatedMetadata[key] = metadata[key];
    }
  }

  try {
    const response = await axios.patch(
      url,
      { user_metadata: updatedMetadata },
      {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error updating/deleting user metadata:',
      error.response ? error.response.data : error.message
    );
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};
