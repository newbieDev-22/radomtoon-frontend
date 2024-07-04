import Joi from "joi";
import validateWrapper from "./validateWrapper";

const milestoneSchema = Joi.object({
  milestoneDetail: Joi.string()
    .required()
    .messages({ "string.empty": "Milestone detail is required" }),
});

const validateMilestone = (input) => validateWrapper(milestoneSchema, input);

export default validateMilestone;
