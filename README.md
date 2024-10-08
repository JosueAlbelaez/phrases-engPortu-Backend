## Descripción del Backend - Aplicación MERN de Frases en Inglés

Este repositorio contiene el backend de una aplicación web desarrollada utilizando el stack MERN (MongoDB, Express, React, Node.js). El backend está encargado de gestionar las frases almacenadas en una base de datos MongoDB, proporcionando una API que permite obtener, filtrar, y manipular estas frases de acuerdo con sus categorías e idiomas, para su posterior uso en el frontend de la aplicación.

### Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para el backend.
- **Express**: Framework web para crear la API RESTful.
- **MongoDB**: Base de datos NoSQL que almacena las frases en distintos idiomas y categorías.
- **Mongoose**: Biblioteca que facilita la modelización de datos y la interacción con MongoDB.
- **TypeScript**: Lenguaje utilizado en todo el backend para garantizar un código más robusto y mantenible.
- **Nodemon**: Herramienta para el desarrollo que reinicia el servidor automáticamente al detectar cambios.
- **dotenv**: Manejo de variables de entorno para configuración sensible (como la conexión a la base de datos).
- **ts-node**: Permite ejecutar TypeScript directamente en Node.js.

### Funcionalidades Principales

1. **Gestión de Frases**:
   - Cada frase tiene una categoría asociada (como salud, familia, o comida), su versión en inglés y su traducción al español.
   - El backend permite obtener frases aleatorias de cualquier categoría o de una categoría específica.

2. **API RESTful**:
   - Endpoints para consultar frases aleatorias o filtrar por categoría e idioma.
   - Capacidad de manejar grandes conjuntos de frases mediante agregaciones y consultas eficientes en MongoDB.

3. **Manejo de Errores**:
   - La conexión con la base de datos y las operaciones de la API están envueltas en bloques `async/await` con `try/catch`, garantizando la correcta gestión de errores y logs detallados en caso de fallos.

4. **Internacionalización**:
   - La API soporta múltiples idiomas (actualmente inglés y portugués), permitiendo expandir las funcionalidades a otras lenguas en el futuro.

### Estructura de Carpetas

- **src/**: Contiene todo el código fuente.
  - **controllers/**: Maneja la lógica de las rutas y llamadas a la base de datos.
  - **models/**: Define los esquemas de Mongoose para la base de datos.
  - **routes/**: Define los endpoints de la API.
  - **services/**: Servicios auxiliares como la conexión a la base de datos.
- **config/**: Archivos de configuración como las variables de entorno.

### Instrucciones de Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/backend-mern-app.git
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables de entorno:

   ```env
   DATABASE_URL=<aquí colocar la url de la base de datos>
   PORT=5000
   ```

4. Iniciar el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

---

Si estás interesado en colaboraciones o tienes alguna oferta laboral, estoy disponible para oportunidades como desarrollador **React JS** o **MERN Stack**.
