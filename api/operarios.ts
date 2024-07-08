import type { VercelRequest, VercelResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
// Evita que a JSON le de una embolia al no comprender que carajo es un bigint
BigInt.prototype.toJSON = function() { return this.toString() }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const operarios = await prisma.operario.findMany()
  
  return res.json(operarios);
}
