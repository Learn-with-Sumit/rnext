import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    title: {
        required: true,

        type: String,
    },

    description: {
        required: false,

        type: String,
    },

    thumbnail: {
        required: true,

        type: String,
    },
});

export const Category =
    mongoose.models.Category ?? mongoose.model("Category", categorySchema);
