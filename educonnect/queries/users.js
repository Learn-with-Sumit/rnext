import { User } from "@/model/user-model";
import { replaceMongoIdInObject } from "@/lib/convertData";

export async function getUserByEmail(email) {
    const user = await User.findOne({ email: email }).lean();
    return replaceMongoIdInObject(user);
}
