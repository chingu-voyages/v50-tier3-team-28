const Joi = require("joi");

const validateUser = (user) => {
  const schema = Joi.object({
    authID: Joi.string().required(),
    phoneNumber: Joi.string().optional().allow(null, ''),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    location: Joi.object({
      type: Joi.string().valid("Point").required(),
      coordinates: Joi.array().items(Joi.number()).length(2).required(),
      city: Joi.string().optional().allow(null, ''),
      country: Joi.string().optional().allow(null, ''),
    }).required(),
  });

  return schema.validate(user);
};

const validateRequest = (request) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().optional().allow(null, ''),
    isAccepted: Joi.boolean().required(),
    isCompleted: Joi.boolean().required(),
    completedAt: Joi.date().optional().allow(null, ''),
    beefinderId: Joi.string().required(),
    beekeeperId: Joi.string().optional().allow(null, ''),
    location: Joi.object({
      type: Joi.string().valid("Point").required(),
      coordinates: Joi.array().items(Joi.number()).length(2).required(),
      city: Joi.string().optional().allow(null, ''),
      country: Joi.string().optional().allow(null, ''),
    }).required(),
  });

  return schema.validate(request);
};

module.exports = {
  validateUser,
  validateRequest,
};
