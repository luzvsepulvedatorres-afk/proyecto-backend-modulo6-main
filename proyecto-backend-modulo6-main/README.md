# Proyecto Módulo #6: Node & Express Web App (Parte 1 a Parte 3)

Aplicación web desarrollada con Node.js y Express como base inicial para el backend, estructurada bajo una arquitectura modular y limpia, con integración de persistencia en SQLite y autenticación segura basada en JSON Web Tokens (JWT).

---

## 🚀 Tecnologías y Herramientas Utilizadas
* **Node.js** (v18+)
* **Express.js**
* **SQLite** (Base de datos relacional)
* **JWT (JSON Web Tokens)** (para la autenticación y seguridad de rutas)
* **Dotenv** (para la gestión de variables de entorno)
* **Nodemon** (como dependencia de desarrollo para reinicio automático)
* **Thunder Client** (herramienta de pruebas HTTP)
* **Módulo nativo `fs` (File System)** (para persistencia en archivos planos y logs)

---

## 📁 Estructura del Proyecto
El proyecto cumple con la arquitectura modular obligatoria organizada en las siguientes carpetas:
* `controllers/`: Contiene la lógica de negocio y controladores de las rutas (`appController.js`).
* `routes/`: Define las rutas y endpoints del servidor (`appRoutes.js`).
* `middlewares/`: Espacio destinado a interceptores y funciones intermedias (como el registro de logs y validación de tokens).
* `public/`: Almacena el contenido estático servido directamente por Express (`index.html`).
* `logs/`: Almacena el archivo plano `log.txt` con el registro de peticiones.

---

## ⚙️ Instrucciones de Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd proyecto-backend-modulo6
Instalar dependencias:

Bash
npm install
Configurar las variables de entorno:
Crea un archivo .env en la raíz del proyecto y define el puerto:

Fragmento de código
PORT=3000
JWT_SECRET=tu_clave_secreta
Ejecutar la aplicación:

Modo producción:

Bash
npm start
Modo desarrollo (con Nodemon):

Bash
npm run dev
💡 Decisiones Técnicas y Justificaciones
Nombre del archivo principal (app.js): Se optó por app.js en lugar de index.js como una convención estándar en Express para separar el archivo de inicialización del servidor de los puntos de entrada o pruebas unitarias, facilitando la lectura y escalabilidad del proyecto.

Modularización (Rutas y Controladores): Se separó la lógica de negocio (controllers/) de los endpoints (routes/) para evitar un archivo monolítico, permitiendo que la aplicación sea escalable.

Persistencia en archivos planos (fs): Se implementó un middleware personalizado que utiliza fs.appendFile de manera asíncrona para registrar de forma automática la fecha, hora y ruta accedida (log.txt) en cada petición HTTP, cumpliendo con los requisitos de trazabilidad básica.

Seguridad y Autenticación (JWT): Se implementó un sistema de control de acceso mediante tokens para asegurar que las rutas críticas de la API requieran credenciales válidas.

🚀 Módulo 8 (Parte 3): Pruebas de API y Seguridad JWT
En esta sección final del proyecto, se implementó y validó la capa de seguridad y los endpoints principales utilizando Node.js, Express y SQLite, asegurando la correcta autenticación de usuarios y la protección de rutas.

🛠️ Endpoints y Pruebas Realizadas (Evidencias con Thunder Client)
Autenticación y Generación de Token (POST /api/login)

Descripción: Recibe las credenciales del usuario (ej. admin / 1234) y emite un token de acceso seguro (JWT).

Respuesta Esperada: 200 OK con el objeto de éxito y el token cifrado de sesión.

Control de Acceso y Rutas Protegidas (GET /api/usuarios)

Prueba sin autorización: Al intentar consultar la ruta sin el token, el servidor bloquea el acceso devolviendo un código de error ("Token no proporcionado" o 403 Forbidden / 401 Unauthorized).

Prueba con autorización: Al incluir el encabezado Authorization: Bearer <token>, el servidor valida la firma y responde exitosamente con un 200 OK y el listado de usuarios de la base de datos.

Creación de Recursos (POST /api/usuarios)

Descripción: Permite registrar nuevos usuarios en el sistema.

Respuesta Esperada: 201 Created confirmando el registro exitoso en SQLite.