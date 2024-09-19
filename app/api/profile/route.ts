import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { updateUserSchema } from "@/lib/user-schema";
import { ZodError } from "zod";

export async function PATCH(req: Request) {
  try {
    const { id, name, email } = updateUserSchema.parse(await req.json());

    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            name,
            email: email.toLowerCase(),
        },
    });

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
