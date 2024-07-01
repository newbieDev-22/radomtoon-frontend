import Joi from "joi";

const declineReasonSchema = Joi.object({
  declineReason: Joi.string()
    .required()
    .messages({ "string.empty": "Evidence detail is required." }),
});

const validateDeclineReason = (input) => {
  const { error } = declineReasonSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
  return null;
};

export default validateDeclineReason;
