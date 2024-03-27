export * from "@prisma/client/edge";
export * from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATASOURCE_URL,
}).$extends(withAccelerate());
export default prisma;
