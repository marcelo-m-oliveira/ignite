import { PrismaClient } from '@prisma/client'

export const primsma = new PrismaClient({
  log: ['query'],
})
