# Online CoffeeShop - Microservicio para Servir Imágenes 

Integrantes: Jonathan Chasipanta
             Gonzalo Guachamin 

![Imagen de la portada](/images/p1.jpg)
Este proyecto es un microservicio desarrollado con Node.js y Express que sirve imágenes almacenadas en un directorio local y una interfaz frontend para visualizar las imágenes.

## Requisitos

- Node v20.13.1
- Docker version 26.0.0 

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/JonathanP06511/P1M1-microservicioImagen.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    node server.js
    ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la interfaz de frontend.

## Uso con Docker

1. Construye la imagen Docker:
    ```bash
    docker build -t image-name .
    ```

2. Inicia un contenedor con la imagen creada:
    ```bash
    docker run -p 8080:3000 -d --name container_name image_name
    ```

3. Abre tu navegador y navega a `http://localhost:3000` para ver la interfaz de frontend.

## Endpoints

- `GET /api/images`: Obtiene la lista de imágenes disponibles.
- `GET /api/images/:imageName`: Sirve una imagen específica por nombre.
- `GET /`: Carga el frontend.



