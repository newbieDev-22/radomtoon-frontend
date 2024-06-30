import Joi from "joi";

const loginSchema = Joi.object({
  emailOrPhone: Joi.string().required(),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({ "string.empty": "Password is required." })
    .messages({
      "string.pattern.base":
        "Must be at least 6 characters and contain only alphabets and numbers.",
    }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
