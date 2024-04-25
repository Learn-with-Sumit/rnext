import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  const { fname, lname, email, password } = await request.json();

  console.log(fname, lname, email, password);

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashedPassword,
  };

  console.log(newUser);

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};