import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// export const db =
//   globalThis.prisma ||
//   new PrismaClient({
//     datasourceUrl: process.env.NODE_ENV !== "production"
//       ? process.env.LOCAL_DB_URL
//       : process.env.POSTGRES_DATABASE_PRISMA_URL
//   });


if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

