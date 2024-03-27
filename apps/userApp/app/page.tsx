import { PrismaClient } from "@repo/db/client";
import { withAccelerate } from "@repo/db/client";

const prisma = new PrismaClient().$extends(withAccelerate());

export default function Page(): JSX.Element {
  return <div>HIII</div>;
}
