import Joi from "joi";
import validateWrapper from "./validateWrapper";

const productSchema = Joi.object({
  productName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Product name is required" }),
  goal: Joi.number().min(0).required().messages({
    "number.base": "Goal must be a number",
    "number.min": "Goal should be greater than 0",
  }),
  deadline: Joi.date().greater("now").required(),
  categoryId: Joi.number().integer().min(1).max(10).required(),
  productVideo: Joi.string().allow("", null),
  summaryDetail: Joi.string().trim().max(256).required().messages(
    { "string.empty": "Summary detail is required" },
    {
      "string.max":
        "Summary detail length must be less than or equal to 256 characters long",
    }
  ),
});

const validateProduct = (input) => validateWrapper(productSchema, input);

export default validateProduct;
