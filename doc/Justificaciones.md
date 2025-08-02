# Justificaciones técnicas

## Estructuras de datos

El esquema de la base de datos fue diseñado para reflejar las relaciones entre usuarios, retos, actividades y UserChallenges. Inicialmente se comenzó con un sistema en el que no existiese un objeto que relacionara tanto a User como a Challenge. No obstante, con el paso del tiempo fue necesario añadir este para crear una mejor relación entre objetos, verificar si estos ya existen, y poder acceder a estas relaciones por medio de los componentes Activity. 

Se trató de que en cada archivo existiese una estructura similar de datos.

## Validación

Para validar el sistema se utilizó Postman para probar las solicitudes a la par que la API se encontrase en ejecución. Esto permitió identificar errores y corregirlos lo más pronto posible. También se probó con IDs reales para la creación de retos o "challenges", y actividades. Esto permitió verificar los mensajes de éxito o fallo.

## Concurrencia

La API gestiona la concurrencia utilizando la arquitectura no bloqueante. Se usa también la arquitectura basada en eventos de Node.js. De esta forma el sistema utiliza un middlewear, lo que significa que es posible manejar diversas solicitudes.

Se usa también de la sección de scripts en package.json, lo que ayuda a poder ejecutar "npm run dev" y a poder realizar cambios en el sistema sin tener que reiniciar el servicio.

## Stack tecnológico

- Node.js: Se utiliza Node.js para el entorno de ejecución del servidor.

- Express: Se utiliza Express como framework web para Node.js, facilitando la creación de rutas y middleware.

- MongoDB: Se utiliza MongoDB como base de datos NoSQL para almacenar la información de usuarios, retos y actividades.

- Mongoose: Se utiliza Mongoose como ODM (Object-Document Mapper) para interactuar con MongoDB de manera más sencilla y con validación de esquemas.

## Decisiones de implementación específicas

- Tareas programadas con node-cron: La biblioteca `node-cron` se utilizó para implementar tareas programadas para actualizaciones diarias del progreso. Este enfoque permite el procesamiento automatizado de datos sin necesidad de intervención manual.

- Operaciones asíncronas con async/await: La sintaxis `async/await` se utilizó ampliamente para gestionar operaciones asíncronas, mejorando la legibilidad del código y simplificando el manejo de errores.