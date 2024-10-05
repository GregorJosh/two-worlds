import Mongoose, { FlattenMaps, Model, Schema } from "mongoose";

const trackSchema = new Schema<Documents.Track>({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

trackSchema.set("id", true);

export const Track: Model<Documents.Track> =
  Mongoose.models.Track || Mongoose.model("Track", trackSchema);

export type Track = FlattenMaps<Documents.Track> & {
  _id: Mongoose.Types.ObjectId;
  id: string;
};
