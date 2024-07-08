import Joi from "joi";
import validateWrapper from "./validateWrapper";

const evidenceMilestoneSchema = Joi.object({
  evidenceTextDetail: Joi.string()
    .required()
    .messages({ "string.empty": "Evidence milestone detail is required" }),
});

const validateEvidenceMilestone = (input) => validateWrapper(evidenceMilestoneSchema, input);

export default validateEvidenceMilestone;
