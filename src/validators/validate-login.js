import Joi from "joi";
import validateWrapper from "./validateWrapper";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is wrong format",
    }),

  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

const validateLogin = (input) => validateWrapper(loginSchema, input);

export default validateLogin;
