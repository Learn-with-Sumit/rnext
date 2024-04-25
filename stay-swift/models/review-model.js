
import mongoose, {Schema} from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    required: true,
    type: ObjectId
  },
  userId: {
    required: true,
    type: ObjectId
  },
  review: {
    required: true,
    type: Number
  },
});


export const reviewModel = mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);
