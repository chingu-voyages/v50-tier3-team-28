const {
  updateOrDeleteUserMetadata,
  deleteUser,
} = require('../services/userService');
const { validateMetadata } = require('../validators/metadataValidator');
const User = require('../models/User');

exports.updateOrDeleteMetadata = async (req, res) => {
  //To ensure metadata is an object and not undefined
  const { metadata = {} } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const validMetadata = validateMetadata(metadata);
    const updatedUser = await updateOrDeleteUserMetadata(
      userId,
      token,
      validMetadata // metadata || {}
    );
    res.json({
      message: 'Metadata updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    if (error.status === 400) {
      // Joi validation error
      return res.status(error.status).json({ message: error.message });
    }
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUserfromDb = async (req, res) => {
  const { userId } = req.params;
  const token = req.headers.authorization.split(' ')[1];

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const authId = user.userId;

    const result = await deleteUser(authId, token);

    res.status(200).json({
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error in deleteUserFromDb:', error);
    res.status(500).json({
      message: 'Error deleting user',
      error: error.message,
    });
  }
};
//   if (!token) {
//     return res.status(401).json({ message: 'Authorization token is required' });
//   }
//   if (!userId) {
//     return res.status(400).json({ message: 'User ID is required' });
//   }
//   try {
//     const deletedUser = await deleteUser(userId, token);
//     res.json({
//       message: 'User deleted successfully',
//       user: deletedUser,
//     });
//   } catch (error) {
//     if (error.message === 'User not found') {
//       return res.status(404).json({ message: error.message });
//     }
//     console.error('Unexpected error:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
