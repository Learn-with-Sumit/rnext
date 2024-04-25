import { bookingModel } from "@/models/booking-model";
import { dbConnect } from "@/service/mongo";
import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

export const POST = async (request) => {
  const { hotelId, userId, checkin, checkout } = await request.json();

  console.log(hotelId, userId, checkin, checkout);

  await dbConnect();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout
  };

  console.log(payload);

  try {
    await bookingModel.create(payload);
    return new NextResponse("A New Booking has been made", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};