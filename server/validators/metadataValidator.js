const Joi = require('joi');

const metadataSchema = Joi.object({
  contactNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/) // Basic regex for international phone numbers
    .allow(null)
    .optional()
    .messages({
      'string.pattern.base': 'Invalid phone number format',
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
