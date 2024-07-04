import Joi from "joi";
import validateWrapper from "./validateWrapper";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is required" }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Last name is required" }),
  email: Joi.string()
    .required()
    .email({ tlds: false })
    .messages({
      "alternatives.match": "Invalid Email address",
      "string.empty": "Email is required",
      "string.email": "Email is wrong format",
    })
    .messages({ "string.empty": "Email is required" }),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "alternatives.match": "Invalid Mobile number",
      "string.pattern.base": "Phone should be 10 digits",
    })
    .messages({ "string.empty": "Phone number is required" }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({ "string.empty": "Password is required" })
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 character and contain alphabet or number",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm password is required",
    "any.only": "Password and confirm password did not match",
  }),
  address: Joi.string().required().messages({ "string.empty": "Address is required" }),
  provinceId: Joi.number().required(),
});

const validateRegister = (input) => validateWrapper(registerSchema, input);

export default validateRegister;
