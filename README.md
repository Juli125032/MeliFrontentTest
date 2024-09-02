
# Mercado Libre Test

Este proyecto es una implementación de un buscador de productos utilizando React en el frontend y Express en el backend. Permite a los usuarios buscar productos, ver los detalles de un producto específico y navegar por las categorías a través de un breadcrumb.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API](#api)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Características

- Búsqueda de productos utilizando la API de Mercado Libre.
- Visualización de resultados de búsqueda con precios formateados.
- Breadcrumb dinámico basado en las categorías del producto.
- Detalles del producto con imagen, descripción, y precio.
- Navegación interna entre las vistas de búsqueda y detalle.
- Manejo de envío gratuito y condiciones del producto.

## Requisitos Previos

- Node.js (v18.x o superior)
- npm (v6.x o superior) o Yarn

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mercado-libre-test.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd mercado-libre-test
   ```

3. Instala las dependencias del proyecto para el frontend y el backend:

   ```bash
   # Para el frontend
   cd client
   npm install

   # Para el backend
   cd ../server
   npm install
   ```

## Ejecución

Para ejecutar el proyecto en un entorno de desarrollo, sigue estos pasos:

1. **Iniciar el servidor backend**:

   ```bash
   cd server
   npm run dev
   ```

   Esto iniciará el servidor Express en `http://localhost:3001`.

2. **Iniciar el frontend**:

   En una nueva terminal, inicia la aplicación React:

   ```bash
   cd client
   npm start
   ```

   Esto iniciará la aplicación React en `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
mercado-libre-test/
├── client/                  # Código del frontend (React)
│   ├── public/              # Archivos públicos
│   ├── src/                 # Código fuente
│   └── package.json         # Dependencias y scripts del frontend
├── server/                  # Código del backend (Express)
│   ├── routes/              # Rutas de la API
│   ├── controllers/         # Controladores de la lógica de negocio
│   └── package.json         # Dependencias y scripts del backend
└── README.md                # Documentación del proyecto
```

## API

### Endpoints

- **`GET /api/items?q=:query`**: Busca productos en la API de Mercado Libre y devuelve los resultados formateados.
- **`GET /api/items/:id`**: Obtiene los detalles de un producto específico incluyendo la descripción.

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - React Router
  - SASS
  - Axios

- **Backend**:
  - Node.js
  - Express
  - Axios (para llamadas a la API de Mercado Libre)
