import Mongoose, { Schema, Model } from "mongoose";

const userSchema = new Schema<Documents.User>(
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

export const User: Model<Documents.User> =
  Mongoose.models.User || Mongoose.model("User", userSchema);
