import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    if (!params.pinId) {
      return new NextResponse("Not found", { status: 404 });
    }

    const { title, description, type, content } = await req.json();

    const updatePin = await db.pin.update({
      where: {
        id: params.pinId,
      },
      data: {
        title: title,
      },
    });

    return NextResponse.json(updatePin, { status: 200 });
  } catch (error) {
    console.log("UPDATE PIN", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
