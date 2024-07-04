import Joi from "joi";
import validateWrapper from "./validateWrapper";

const tierSchema = Joi.object({
  tierName: Joi.string().required().messages({ "string.empty": "Tier name is required" }),
  tierRankId: Joi.number().integer().min(1).max(3).required(),
  price: Joi.number().min(0).required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number",
    "number.min": "Price should be greater than 0",
  }),
  tierImage: Joi.string().allow("", null),
  tierDetail: Joi.string()
    .required()
    .messages({ "string.empty": "Tier detail is required" }),
});

const validateTier = (input) => validateWrapper(tierSchema, input);

export default validateTier;
