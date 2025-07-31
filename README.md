# API_Restful
Diseñar una API RESTFUL que permita gestionar el progreso de los usuarios en distintos retos de salud, tomando como base los datos de actividad física

## Proceso de instalación

<!--
npm init -y
npm install express
 -->

Para ejecutar la API sigue los siguientes pasos:

Instala MongoDB y crea/usa la base de datos correspondiente

```
mongosh
use retos_salud
```

Clona el repositorio

```
git clone https://github.com/AlejandroMoc/API_Restful
```

Instala NodeJS y Express e inicia la API

```
# Navegar a la carpeta clonada
cd API_Restful

# Iniciar la API
npm run dev
```

## Probar la API

Para probar la API, es posible usar PostMan de la siguiente manera.

### Usuarios

#### Registro de usuarios

Para probar el registro de usuarios, colocar los siguientes datos:

```
## Seleccionar POST y colocar URL
http://localhost:3000/api/users/signup

## En Body, seleccionar Raw y pegar el contenido.
{
    "name": "Pedro Equis",
    "email": "pedrox@sitio.com"
}
```

Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

### Eliminación de usuarios
```
## Seleccionar DELETE y colocar URL con el usuario correspondiente.
## En Body, seleccionar None como parámetros.
http://localhost:3000/api/users/delete/:userId

```

### Retos

#### Registro de retos

 - El nombre y descripción del reto se definen por "name" y "description".
 - La cantidad de días que dura un reto se define por "numberDays".
 - El tipo de reto, "goalType", debe ser "daily" o "accumulative".
 - El número que se debe alcanzar en el reto se define por "goalNumber".

```
## Seleccionar POST y colocar URL
http://localhost:3000/api/challenges/create

## En Body, seleccionar Raw y pegar el contenido
{
    "name": "Comer fruta",
    "description" : "Comer dos frutas diariamente por una semana.",
    "numberDays": "7",
    
    "goalType": "daily",
    "goalNumber": "2"
}
```

Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

#### Registrar un usuario en un reto

Lorem Ipsum
