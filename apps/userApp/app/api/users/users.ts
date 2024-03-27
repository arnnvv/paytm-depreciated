import { NextResponse } from "next/server";
import { PrismaClient, withAccelerate } from "@repo/db/client";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATASOURCE_URL,
}).$extends(withAccelerate());

export const GET = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Arnav",
      email: "arnav@me.com",
      number: "1234-567-8910",
      password: "qwertyuiop",
    },
  });
  return NextResponse.json(user);
};
