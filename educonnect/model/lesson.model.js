import mongoose, {Schema} from "mongoose";


const lessonSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: false,
    type: String
  },
  duration: {
    required: true,
    default: 0,
    type: Number
  },
  video_url: {
    required: false,
    type: String
  },
  active: {
    required: true,
    default: false,
    type: Boolean
  },
  slug: {
    required: true,
    type: String
  },
  access: {
    required: true,
    default: "private",
    type: String
  },
  order: {
    required: true,
    type: Number,
  },
});

export const Lesson = mongoose.models.Lesson ?? mongoose.model("Lesson", lessonSchema);
