import Mongoose, { Schema, Model } from "mongoose";

const articleSchema = new Schema<Documents.Article>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      readonly: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true,
  }
);

articleSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

export const Article: Model<Documents.Article> =
  Mongoose.models.Article || Mongoose.model("Article", articleSchema);
