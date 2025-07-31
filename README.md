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

```
# Navegar a la carpeta clonada
cd API_Restful

# Iniciar la API
npm run dev
```

## Probar la API

Para probar la API, es posible usar PostMan de la siguiente manera.

### Usuarios

Para probar el registro de usuarios, colocar los siguientes datos:

```
## Seleccionar POST y colocar URL
http://localhost:3000/api/users/create


## En Body, seleccionar Raw y pegar el contenido
{
    "name": "Pedro Equis",
    "email": "pedrox@sitio.com"
}
```

Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.



### Retos

Para probar el registro de usuarios, colocar los siguientes datos.

El tipo de reto, goalType, debe ser "daily" o "accumulative".

```
## Seleccionar POST y colocar URL
http://localhost:3000/api/challenges/create


## En Body, seleccionar Raw y pegar el contenido
{
    "id": "01",
    "name": "Comer fruta",
    "description" : "Comer dos frutas diariamente",
    "startDate": "2025-07-30T00:00:00.000Z",
    "endDate": "2025-08-01T00:00:00.000Z",
    "goalNumber": "2",
    "goalType": "daily"
}
```

Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

