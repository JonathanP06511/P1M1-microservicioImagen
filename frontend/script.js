document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/images')
      .then(response => response.json())
      .then(images => {
        const gallery = document.querySelector('.gallery');
        images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image.url;
          imgElement.alt = image.name;
          imgElement.classList.add('image');
          gallery.appendChild(imgElement);
        });
      })
      .catch(error => console.error('Error al cargar imágenes:', error));
  });
  