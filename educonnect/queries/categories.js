import { Category } from "@/model/category-model";
import { replaceMongoIdInArray } from "@/lib/convertData";

export async function getCategories() {
    const categories = await Category.find({}).lean();
    return replaceMongoIdInArray(categories);
}