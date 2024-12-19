
import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    if (!params.pinId) {
      return new NextResponse("Not found", { status: 404 });
    }

    const deletedPin = await db.pin.delete({
      where: {
        id: params.pinId,
      },
    });

    return NextResponse.json(deletedPin, { status: 200 });
  } catch (error) {
    console.log("[DELETE PIN]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
