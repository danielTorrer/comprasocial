# Compra Social
Compra social es una plataforma que permite adquirir productos directamente de [IAPs](https://es.wikipedia.org/wiki/Instituci%C3%B3n_de_Asistencia_Privada) elaborados por personas en situaciones vulnerables con el fin de que su trabajo los integre a la economia local.

## Diseño
Todo el diseño esta basasdo en las especificaciones de diseño de google [Material Design](http://www.google.com/design/spec/material-design/introduction.html) que nos permite tener una mejor estructura visual y de información.

## Tecnologia e instalación

### :rocket: Showtime

Debes tener instalado git, node.js, npm y tu gestor de base de datos favorito.

#### :one: Instalar Sails*

```bash
$ sudo npm install sails -g
```

#### :two: Clonar el proyecto

Clonamos este repositorio

```bash
$ git clone https://github.com/monkeythecoder/comercio.git
```

Entramos al folder
```bash
$ cd comercio
```
Instalamos todas las dependencias
```bash
$ npm install
```

#### :three: Configurar variables locales
Creamos un archivo en config/local.js

```bash
$ touch config/local.js
```

Y dentro de ese archivo establecemos las siguientes variables:
- Datos de conexión a la base de datos de acuerdo a la documentacion de [Sails.js](https://github.com/balderdashy/sails-docs/blob/master/reference/sails.config/sails.config.connections.md)  

#### :four: Lanzar la aplicación
```bash
$ sails lift
```

Ya puedes ver tu aplicación en: [http://localhost:1337](http://localhost:1337)


## Producción
Para lanzar la aplicación en modo de producción, ejecuta el comando:
```bash
$ NODE_ENV=production node app.js
```

## API
Este proyecto tiene una API pública con el fin de que la comunidad pueda extenderlo a otro tipo de dispositivos o aplicaciones.

#### Producto
|Verb|Descripción|
|-----|----------|
|```GET /producto```|Listado de Producto|
|```POST /producto```|Crear Producto|
|```PUT /producto/id```|Editar Producto |
|```DELETE /producto/id```|Eliminar Producto|

#### IAP
|Verb|Descripción|
|-----|----------|
|```GET /iap```|Listado de IAP|
|```POST /iap```|Crear IAP|
|```PUT /iap/id```|Editar IAP |
|```DELETE /iap/id```|Eliminar IAP|

## Futuro
Esta aplicación se puede expandir en un futuro para implementar métodos de pago por tarjeta y en autoservicios (OXXO, Supermercados) y así lograr una plataforma que sea utilizada por la población en general.
