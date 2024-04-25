import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

export async function getAllHotels() {
    const hotels = await hotelModel
    .find()
    .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
    .lean();

    return replaceMongoIdInArray(hotels);
}

export async function getHotelById(hotelId) {
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObject(hotel);
}

export async function getRatingsForAHotel(hotelId) {
    const ratings = await ratingModel.find({hotelId: hotelId}).lean();
    return replaceMongoIdInArray(ratings);
}

export async function getReviewsForAHotel(hotelId) {
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
}