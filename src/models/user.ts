import { models, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (document, result) => {
    delete result._id;
    delete result.password;
  },
});

export const User = models.User || model("User", userSchema);
