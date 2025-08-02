# Diseño de la API

En este documento se explica un poco sobre el diseño, arquitectura y modularización usados para la API de Salúd presente.

El objetivo de esta API es la gestión y registro de retos en los que los usuarios pueden inscribirse. De igual forma, se tiene contemplado el registro de actividades o actualizaciones diarias, lo que permite cumplir los retos.

## Arquitectura

Esta API es de tipo RESTFUL, utilizando HTTP, NodeJS y Express para comunicarse con la base de datos en MongoDB por medio de mongoose. Se utiliza también bcrypt para encriptar/descrifrar las contraseñas y node-cron para automatizar la tarea de verificación de avances cada noche.

La arquitectura de este proyecto se divide por carpetas, siendo que se tiene:

 - doc: Representa la documentación de la API.
 - src: Representa los archivos .js con los que se comunica la API.

Dentro de la carpeta de src se tienen las siguientes carpetas y archivos:

 - models: Aquí dentro existen los archivos de los Schemas o modelos usados en la base de datos. 
 - routes: Las rutas utilizadas por la API, es decir, los endpoints.
 - index.js: El archivo principal que conecta los archivos de la carpeta routes.

## Modelos de datos

La API utiliza los siguientes modelos de datos clave:

- Usuario: Un usuario del sistema, con nombre, correo electrónico y contraseña.
- Reto: Representa un reto de salud, con nombre, descripción, tipo, duración y valor objetivo.
- Actividad: Representa la actividad diaria de un usuario, con atributos como fecha, tipo y valor.
- UserChallenge: La relación entre un usuario y un reto. Es la participación de un usuario en un reto, con progreso, fecha de inicio y estado de finalización.

## Endpoints

Los principales endpoints de la API son:

- `/api/users`: Para el registro y la gestión de usuarios.
- `/api/challenges`: Para la creación y gestión de retos.
- `/api/activities`: Para registrar las actividades de los usuarios.

## Decisiones de diseño

Se decidió estructurar el código de esta forma para seguir una arquitectura similar a la de una API Restful que esté organizada y que pueda ser escalada a futuro. Se decidió dividr cada tarea en un script separado para tener así mayor claridad y limpieza. Se usó la librería mongoose para crear los recursos mediante Schemas para MongoDB, facilitando así la necesidad de crearlos manualmente desde la terminal de MongoDB.