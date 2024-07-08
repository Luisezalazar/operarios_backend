import type { VercelRequest, VercelResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
// Evita que a JSON le de una embolia al no comprender un bigint
BigInt.prototype.toJSON = function() { return this.toString() }

export default async function handler(req: VercelRequest, res: VercelResponse) {
 
  const { hora2, actividades2, tipo_actividades2, operario2, vehiculo2, numeroVuelo2, cargaSalmon2, cargaGeneral2 } = req.body;
  // Ejemplo de validación básica
  if (!hora2 || !operario2 || !vehiculo2 || !numeroVuelo2 || !cargaSalmon2 || !cargaGeneral2) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  //const sql = "INSERT INTO formulario (hora, actividad, tipo_actividad, id_operario, id_vehiculo, numero_vuelo, cargaSalmon, cargaGeneral) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  //const values = [hora, actividades, tipo_actividades, operario, vehiculo, numeroVuelo, cargaSalmon, cargaGeneral];
  await prisma.formulario.create({
    data:{
      id_formulario:1, // Arreglar error
      hora:hora2,
      actividad: actividades2,
      tipo_actividad: tipo_actividades2,
      operario: operario2,
      vehiculo: vehiculo2,
      numero_vuelo: numeroVuelo2,
      cargaSalmon: cargaSalmon2,
      cargaGeneral: cargaGeneral2
    }
  })
  
  return res.json();
}
