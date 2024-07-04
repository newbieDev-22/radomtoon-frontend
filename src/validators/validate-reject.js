import Joi from "joi";
import validateWrapper from "./validateWrapper";

const rejectSchema = Joi.object({
  comment: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Comment is required" }),
});

const validateReject = (input) => validateWrapper(rejectSchema, input);

export default validateReject;
