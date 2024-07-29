const Joi = require('joi');

const requestValidateSchema = Joi.object({
  title: Joi.string()
    .max(100)
    .required()
    .regex(/^(?!\s*$)[\w\s]+$/, 'valid title')
    .messages({
      'string.pattern.name':
        'Title must contain valid characters and not be empty or just spaces.',
    }),
  description: Joi.string()
    .max(750)
    .required()
    .regex(/^(?!\s*$)[\w\s]+$/, 'valid description')
    .messages({
      'string.pattern.name':
        'Description must contain valid characters and not be empty or just spaces.',
    }),
  image: Joi.string().uri().optional().allow(null, ''),
  contactNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required(),
  isActive: Joi.boolean().required(),
  isAccepted: Joi.boolean().required(),
  acceptedAt: Joi.date().optional().allow(null, ''),
  canceledAcceptedAt: Joi.date().optional().allow(null, ''),
  completedAt: Joi.date().optional().allow(null, ''),
  beefinderId: Joi.string().optional(),
  beekeeperId: Joi.string().optional().allow(null, ''),
  location: Joi.object({
    type: Joi.string().valid('Point').required(),
    coordinates: Joi.array().items(Joi.number()).length(2).required(),
    city: Joi.string().optional().allow(null, ''),
    country: Joi.string().optional().allow(null, ''),
  }).required(),
});
const validateRequest = (request) => {
  const { error, value } = requestValidateSchema.validate(request, {
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
  validateRequest,
};
