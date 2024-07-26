const { updateOrDeleteUserMetadata } = require('../services/userService');
const { validateMetadata } = require('../validators/metadataValidator');

exports.updateOrDeleteMetadata = async (req, res) => {
  //To ensure metadata is an object and not undefined
  const { userId, metadata = {} } = req.body;
  const token = req.headers.authorization;

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
    res.json(updatedUser);
  } catch (error) {
    if (error.status === 400) {
      // Joi validation error
      return res.status(error.status).json({ message: error.message });
    }
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
