import Joi from "joi";

export const authSigninSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=\\[\\]{}'\"\\|,.<>/?~\\\\])"
      )
    )
    .min(6)
    .required(),
});
