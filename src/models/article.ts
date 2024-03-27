import { model, Schema, Model, models } from "mongoose";

const articleSchema = new Schema<ArticleDocument>(
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

export const Article: Model<ArticleDocument> =
  models.Article || model("Article", articleSchema);
