import Joi from "joi";
import validateWrapper from "./validateWrapper";

const commentSchema = Joi.object({
    comment: Joi.string()
        .trim()
        .required()
        .messages({ "string.empty": "Comment is required" }),
});

const validateComment = (input) => validateWrapper(commentSchema, input);

export default validateComment;