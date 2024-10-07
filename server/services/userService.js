// const axios = require('axios');
const User = require('../models/User');

exports.getUserInfo = async (userId, token) => {
  const url = `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${userId}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userInfo = await response.json();
    await User.findOneAndUpdate(
      { userId: userInfo.user_id },
      {
        name: userInfo.name,
        email: userInfo.email,
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
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_metadata: updatedMetadata }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating/deleting user metadata:', error);
    throw error;
  }
};

exports.deleteUser = async (userId, token) => {
  const url = `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${userId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    await User.findOneAndDelete({ userId: userId });
    return await response.json();
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
