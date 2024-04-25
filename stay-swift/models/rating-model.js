import mongoose, {Schema} from "mongoose";

const ratingSchma = new Schema({
  hotelId: {
    required: true,
    type: ObjectId
  },
  userId: {
    required: true,
    type: ObjectId
  },
  rating: {
    required: true,
    type: Number
  },
});


export const ratingModel = mongoose.models.ratings ?? mongoose.model("ratings", ratingSchma);
