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
      primaryKey: true
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

    smallDescipcion: {
      type: 'string'
    },

    logo: {
      type: 'string',
      defaultsTo: ''
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

  },

  afterCreate: function(obj,cb){
    Iap.findOne({expediente: obj.expediente})
      .exec(function findOneDia(err, iap){
        iap.smallDescipcion = iap.descripcion.substring(0,100) + "..."
        iap.save(function(err){
          if (err)
            console.log(err);
        });
      });
  }


};
