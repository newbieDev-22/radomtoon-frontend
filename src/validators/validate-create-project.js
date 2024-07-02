import Joi from "joi";
import validateWrapper from "./validateWrapper";

const productSchema = Joi.object({
  productName: Joi.string().required(),
  goal: Joi.number().required(),
  deadline: Joi.date().required(),
  categoryId: Joi.number().integer().min(1).max(10).required(),
  productVideo: Joi.string(),
  summaryDetail: Joi.string().required(),
});

const validateProduct = (input) => validateWrapper(productSchema, input);

export default validateProduct;
