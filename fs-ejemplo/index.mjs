import fs from 'fs';
import path from 'path';

// Verificar que el directorio exista, si no, crearlo
const dir = './data';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Leer un archivo de manera asíncrona
fs.readFile(path.join(dir, 'example.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);

  // Escribir en un nuevo archivo
  fs.writeFile(path.join(dir, 'newfile.txt'), 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    // Renombrar un archivo
    fs.rename(path.join(dir, 'newfile.txt'), path.join(dir, 'renamedfile.txt'), (err) => {
      if (err) throw err;
      console.log('Archivo renombrado');
    });
  });
});
