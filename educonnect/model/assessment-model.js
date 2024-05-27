import mongoose, {Schema} from "mongoose";

const assessmentSchema = new Schema({
  assessments : {
    required: true,
    type: Array,
  },  
  otherMarks : {
    required: true,
    type: Number,
  }, 
});

export const Assessment = mongoose.models.Assessment ?? mongoose.model("Assessment", assessmentSchema);