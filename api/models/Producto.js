/**
* Producto.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    clave: {
      type: 'string'
    },

    nombre: {
      type: 'string'
    },

    descripcion: {
      type: 'string'
    },

    imagen: {
      type: 'string',
      defaultsTo: 'http://lorempixel.com/640/480/technics'
    },

    precio: {
      type: 'string',
      defaultsTo: 'Preguntar'
    },

    iap: {
      columnName: 'expediente',
      model: 'iap'
    }

  }
};
