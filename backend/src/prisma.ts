// backend用 Prisma Client
//backendでPrismaを使う設定
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();