import fs from 'fs/promises';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
async function copiar(origen, destino)
{
    await fs.rename(origen, destino);
}