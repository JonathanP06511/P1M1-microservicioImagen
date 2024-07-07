const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'frontend'
app.use(express.static(path.join(__dirname, 'frontend')));

// Directorio donde se almacenarán las imágenes
const imagesDirectory = path.join(__dirname, 'images');

// Endpoint para obtener la lista de imágenes
app.get('/api/images', (req, res) => {
  // Aquí puedes listar las imágenes disponibles en 'imagesDirectory'
  // En este ejemplo, se listan las imágenes estáticas 'imagen1.jpg' y 'imagen2.jpg'
  const images = [ 
    { name: 'imagen2.jpg', url: '/api/images/imagen2.png' },
    { name: 'imagen2.jpg', url: '/api/images/imagen3.jpg' },
    { name: 'imagen1.jpg', url: '/api/images/imagen5.png' }
    
  ];
  res.json(images);
});

// Endpoint para servir las imágenes estáticas
app.get('/api/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(imagesDirectory, imageName);
  res.sendFile(imagePath);
});

// Ruta inicial que carga el frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
