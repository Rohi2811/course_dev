import * as Joi from 'joi';

export const createCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required()
});

export const createSubCategorySchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().required(),
});

export const createCourseSchema = Joi.object({
  name: Joi.string().required(),
  categories: Joi.array().items(Joi.string()).required(),
  subCategories: Joi.array().items(Joi.string()).optional(),
});
