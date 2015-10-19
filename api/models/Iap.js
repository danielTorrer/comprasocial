/**
* Org.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    expediente: {
      type: "string",
      columnName: 'expediente',
    },

    nombre: {
      type: 'string'
    },

    tel: {
      type: 'string'
    },

    descripcion: {
      type: 'string'
    },

    logo: {
      type: 'string'
    },

    direccion: {
      type: 'string'
    },

    rubro: {
      type: 'string'
    },

    pagina: {
      type: 'string'
    },

    productos: {
      collection: 'producto',
      via: 'iap'
    }

  }
};
