import Joi from "joi";

const evidenceDetailSchema = Joi.object({
  evidenceDetail: Joi.string()
    .required()
    .messages({ "string.empty": "Evidence detail is required." }),
  image: Joi.string().required().messages({
    "string.empty": "Evidence image is required",
    "any.required": "Evidence image is required",
  }),
});

const validateEvidenceDetail = (input) => {
  const { error } = evidenceDetailSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
  return null;
};

export default validateEvidenceDetail;
