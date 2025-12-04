🚀 ProjectoFinalNodejs: API RESTful de ProductosEste proyecto es una API RESTful construida con Node.js, Express y Firebase Firestore (como base de datos NoSQL) para la gestión completa de productos (CRUD). Incluye un sistema simple de autenticación (basado en token JWT) y middlewares de seguridad.🛠️ Stack TecnológicoBackend: Node.js, ExpressBase de Datos: Firebase FirestoreSeguridad: JSON Web Tokens (JWT) para autenticación.Variables de Entorno: dotenv📦 Estructura del ProyectoEl proyecto sigue una arquitectura modular y de capas (Controller -> Service -> Model) para mantener el código limpio y organizado:.
├── node_modules/
├── src/
│   ├── controllers/      # Lógica de negocio y manejo de la solicitud/respuesta (HTTP)
│   ├── data/             # Configuración y conexión a Firebase Firestore
│   ├── midleware/        # Lógica de autenticación (JWT)
│   ├── models/           # Interacción directa con la base de datos (Firestore CRUD)
│   ├── routes/           # Definición de las rutas de la API (Endpoints)
│   └── index.js          # Archivo principal de Express y configuración
├── .env                  # Archivo de variables de entorno (NO se sube a Git)
├── .gitignore            # Archivo de exclusión para Git
└── package.json
⚙️ Configuración e Instalación1. Clona el Repositoriogit clone <URL-del-repositorio>
cd ProjectoFinalNodejs
2. Instalación de DependenciasInstala todas las dependencias listadas en package.json:npm install
3. Configuración de Variables de EntornoCrea un archivo llamado .env en la raíz del proyecto y añade tus credenciales de Firebase. Es vital que uses tus valores reales de la consola de Firebase.# Puerto del servidor
PORT=3000

# Claves de Firebase (Obtenidas de la configuración de tu proyecto)
FIREBASE_API_KEY="TU_CLAVE_API_AQUI"
FIREBASE_AUTH_DOMAIN="tu-dominio.firebaseapp.com"
FIREBASE_STORAGE_BUCKET="tu-bucket.appspot.com"
FIREBASE_APP_ID="1:1234567890:web:abcdef123456"
# Otras variables de Firebase que uses...
4. EjecuciónInicia el servidor en modo desarrollo:npm start
El servidor estará disponible en http://localhost:3000.📌 Endpoints de la APITodas las rutas de la API utilizan el prefijo /api/v1.AutenticaciónMétodoRutaDescripciónSeguridadPOST/api/v1/loginObtiene un token JWT para acceder a las rutas protegidas.PúblicaBody de Ejemplo: {"email": "test@gmail.com", "password": "123456"}Productos (CRUD)MétodoRutaDescripciónSeguridadGET/api/v1/productsObtiene la lista completa de productos.PúblicaGET/api/v1/products/:idObtiene un producto específico por su ID.PúblicaPOST/api/v1/productsCrea un nuevo producto.REQUIERE TOKENPUT/api/v1/products/:idActualiza un producto existente.REQUIERE TOKENDELETE/api/v1/products/:idElimina un producto específico.REQUIERE TOKENNOTA DE SEGURIDAD: Las reglas de Firebase Firestore están configuradas para permitir la lectura pública en la colección products, pero solo se permite la escritura (POST, PUT, DELETE) a usuarios autenticados.