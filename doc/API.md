# Probar la API

Para probar la API, es posible usar PostMan de la siguiente manera.

## Usuarios

### Registro de usuarios

Para probar el registro de usuarios, colocar los siguientes datos:

```
# Seleccionar POST y colocar URL
http://localhost:3000/api/users/signup

# En Body, seleccionar Raw y pegar el contenido.
{
    "name": "Pedro Equis",
    "email": "pedrox@sitio.com",
    "password": "PedroEquis654"
}
```
Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

## Eliminación de usuarios

Para eliminar un usuario, se necesita el correo y contraseña.

```
# Seleccionar DELETE y colocar URL.
http://localhost:3000/api/users/delete/

# En Body, seleccionar Raw como parámetros. Pegar el siguiente contenido.

{
    "email": "pedrox@sitio.com",
    "password": "PedroEquis654"
}
```
Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

### Consultar retos de un usuario

Para consultar los retos de un usuario, se necesita el ID del usuario.

```
# Selecciona GET y coloca la URL
http://localhost:3000/api/users/:userId/challenges

# Por ejemplo, si el ID del usuario es 688c21220143a333e8f61366
http://localhost:3000/api/users/688c21220143a333e8f61366/challenges
```
Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

## Retos

### Registro de retos

 - El nombre y descripción del reto se definen por "name" y "description".
 - La cantidad de días que dura un reto se define por "numberDays".
 - El tipo de reto, "goalType", debe ser "daily" o "accumulative".
 - El número que se debe alcanzar en el reto se define por "goalNumber".

```
# Seleccionar POST y colocar URL
http://localhost:3000/api/challenges/create

# En Body, selecciona Raw y pegar el contenido
{
    "name": "Caminar más",
    "description" : "Dar 5000 pasos diarios por una semana.",

    "type": "steps",
    "numberDays": 7,

    "goalType": "daily",
    "goalNumber": 5000
}
```

Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

### Eliminar un reto

- ":id" representa el ID del reto a eliminar.

```
# Selecciona DELETE y coloca la URL. En Body, selecciona None
http://localhost:3000/api/challenges/delete/:id

# Por ejemplo, si el ID es 688c21220143a333e8f61366
http://localhost:3000/api/challenges/delete/688c21220143a333e8f61366
```
Presionar en el botón "Send".
Ahora se debería imprimir un mensaje de éxito como respuesta de PostMan.

## Actividades

### Registrar una actividad para un usuario

 - El "userId" es el ID del usuario.
 - La fecha registrada para la actividad se representa con "date".
 - "Value" y "type" representan el valor y tipo de la actividad que se registra.
 - "Type" solo puede ser "steps", "sleep" o "cardio_points".

```
# Seleccionar POST y colocar URL
http://localhost:3000/api/activities/register

# En Body, seleccionar Raw y pegar el contenido
{
    "userId": "ID_DEL_USUARIO",
    "date": "2025-07-31",
    "type": "steps",
    "value": 7500
    
}
```