import { NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from "stream";
import { promisify } from "util";

import { updateCourse } from "@/app/actions/course";

const pump = promisify(pipeline);

export async function POST(request, response) {
  try {
    const formData = await request.formData();
    const file = formData.get('files');
    const destination = formData.get('destination');

    if (!destination) {
      return new NextResponse("Destination not provided", {
        status: 500,
      });
    }

    const filePath = `${destination}/${file.name}`;

    await pump(file.stream(), fs.createWriteStream(filePath));

    // This can be decoupled to another
    // route handler
    const courseId = formData.get('courseId');
    await updateCourse(courseId, {thumbnail: file.name});

    return new NextResponse(`File ${file.name} uploaded successfully`, {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}