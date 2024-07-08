const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'frontend')));

const imagesDirectory = path.join(__dirname, 'images');

app.get('/api/images', (req, res) => {

  const images = [ 
    { name: 'imagen2.jpg', url: '/api/images/imagen2.png' },
    { name: 'imagen2.jpg', url: '/api/images/imagen3.jpg' },
    { name: 'imagen1.jpg', url: '/api/images/imagen5.png' }
    
  ];
  res.json(images);
});

app.get('/api/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(imagesDirectory, imageName);
  res.sendFile(imagePath);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
