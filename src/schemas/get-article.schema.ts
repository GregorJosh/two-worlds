import Joi from "joi";

export const getArticleSchema = Joi.object({
  title: Joi.string().min(10).required(),
});
