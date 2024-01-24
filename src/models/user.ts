import { models, model, Schema, Model } from "mongoose";

const userSchema = new Schema<UserDocument>(
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

export const User: Model<UserDocument> =
  models.User || model("User", userSchema);
