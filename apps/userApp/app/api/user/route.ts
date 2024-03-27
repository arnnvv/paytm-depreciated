import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (!session.user)
    return NextResponse.json({ error: "Not Logged In" }, { status: 401 });
  return NextResponse.json({ user: session.user }, { status: 200 });
};
