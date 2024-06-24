import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is required." }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Last name is required." }),
  email: Joi.string().required().email({ tlds: false }).messages({
    "alternatives.match": "Invalid Email address",
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "alternatives.match": "Invalid Mobile number",
    }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({ "string.empty": "Password is required." })
    .messages({
      "string.pattern.base":
        "Must be at least 6 characters and contain only alphabets and numbers",
    }),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({ "string.empty": "Confirm password is required." })
    .messages({
      "any.only": "Password and Confirm password did not match",
    }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
