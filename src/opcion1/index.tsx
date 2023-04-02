import React from "react";
import  "./opcion1.css"

import { Pool } from 'pg';

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

async function obtenerMontoMaximo(): Promise<number> {
  const query = 'SELECT MAX(monto) as monto_maximo FROM ventas;';
  const { rows } = await pool.query(query);
  return rows[0].monto_maximo;
}

obtenerMontoMaximo()
  .then(montoMaximo => console.log(`El monto máximo es: ${montoMaximo}`))
  .catch(error => console.error(error));
export default function Opcion1() {

    return (
        <>
          <h2>El numero mayor de aquí es</h2>
          <p>La información está constituida por un grupo de datos ya supervisados y ordenados, que sirven para construir un mensaje basado en un cierto fenómeno o ente. La información permite resolver problemas y tomar decisiones, ya que su aprovechamiento racional es la base del conocimiento. </p>
        </>  
    )
}
