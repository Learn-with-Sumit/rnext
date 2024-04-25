import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllHotels() {
    const hotels = await hotelModel
    .find()
    .lean();

    return replaceMongoIdInArray(hotels);
}