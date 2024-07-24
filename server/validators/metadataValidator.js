const Joi = require('joi');

const metadataSchema = Joi.object({
  contactNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/) // Basic regex for international phone numbers
    .allow(null)
    .optional()
    .messages({
      'string.pattern.base': 'Invalid phone number format',
    }),

  name: Joi.string()
    .pattern(/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/) // Allows only letters, numbers, and spaces, but not leading or trailing spaces
    .min(1)
    .max(100)
    .allow(null)
    .optional()
    .messages({
      'string.pattern.base':
        'Name can only contain letters, numbers, and spaces, and cannot be just spaces',
      'string.min': 'Name must be at least 1 character long',
      'string.max': 'Name must be less than or equal to 100 characters',
    }),
});

const validateMetadata = (metadata) => {
  const { error, value } = metadataSchema.validate(metadata, {
    abortEarly: false,
  });
  if (error) {
    throw {
      status: 400,
      message: error.details.map((detail) => detail.message).join(', '),
    };
  }
  return value;
};

module.exports = {
  validateMetadata,
};
