import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractedData = await req.json();
    const { title, description } = extractedData;

    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const addedBlog = await Blog.create(extractedData);

    if (addedBlog) {
      return NextResponse.json({
        success: true,
        message: 'Blog added successfully',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Try again',
      });
    }

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to add blog',
    });
  }
}
