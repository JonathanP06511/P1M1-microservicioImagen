# Microservicio para Servir Imágenes

Integrantes: Jonathan Chasipanta
             Gonzalo Guachamin 

Este proyecto es un microservicio desarrollado con Node.js y Express que sirve imágenes almacenadas en un directorio local y una interfaz frontend para visualizar las imágenes.

## Requisitos

- Node.js
- Docker

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```bash
    node server.js
    ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la interfaz de frontend.

## Uso con Docker

1. Construye la imagen Docker:
    ```bash
    docker build -t image-service .
    ```

2. Inicia un contenedor con la imagen creada:
    ```bash
    docker run -p 3000:3000 -v $(pwd)/frontend:/app/frontend -v $(pwd)/images:/app/images image-service
    ```

3. Abre tu navegador y navega a `http://localhost:3000` para ver la interfaz de frontend.

## Endpoints

- `GET /api/images`: Obtiene la lista de imágenes disponibles.
- `GET /api/images/:imageName`: Sirve una imagen específica por nombre.
- `GET /`: Carga el frontend.



