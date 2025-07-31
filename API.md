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

Para probar la eliminación de usuarios, se necesita el nombre de usuario y contraseña.

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

## Retos

### Registro de retos

 - El nombre y descripción del reto se definen por "name" y "description".
 - La cantidad de días que dura un reto se define por "numberDays".
 - El tipo de reto, "goalType", debe ser "daily" o "accumulative".
 - El número que se debe alcanzar en el reto se define por "goalNumber".

```
# Seleccionar POST y colocar URL
http://localhost:3000/api/challenges/create

# En Body, seleccionar Raw y pegar el contenido
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

### Registrar un usuario en un reto

Lorem Ipsum
