import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { updatePasswordSchema } from "@/lib/user-schema";
import { ZodError } from "zod";
import { hash } from "bcryptjs";

export async function PATCH(req: Request) {
  try {
    const { id, password } = updatePasswordSchema.parse(await req.json());

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            password: hashed_password,
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
