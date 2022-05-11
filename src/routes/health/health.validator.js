const Joi = require('joi');

export const sample = {
  body: {
    userId: Joi.number().required(),
  },
};