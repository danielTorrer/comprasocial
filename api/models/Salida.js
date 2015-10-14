/**
* Salida.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment-timezone');

module.exports = {

	attributes: {
		fechaDeSalida : {
			type: 'string'
		}
	},
	
	autoCreatedAt: false,
	autoUpdatedAt: false,

	beforeCreate: function(obj, cb){
		Dia.findOne({ dia: moment().tz('America/Mexico_City').format("DD-MM-YYYY").toString()})
		.exec(function findOneDia(err, dia){

			if (err) { console.log(err); }
			if (!dia) { 
				Dia.create({dia: moment().tz('America/Mexico_City').format("DD-MM-YYYY").toString()})
					.exec(function(err,user){
						if (err) {console.log(err)};
					})
			}
		})

		obj.fechaDeSalida = moment().tz('America/Mexico_City').format();
		cb(null, obj);
	},

	afterCreate: function(obj,cb){

		Dia.findOne({ dia: moment().tz('America/Mexico_City').format('DD-MM-YYYY').toString()})
		.exec(function findOneDia(err, dia){

			if (err) { console.log(err); }
			if (!dia) { 
				Dia.create({dia: moment().tz('America/Mexico_City').format('DD-MM-YYYY').toString()})
			}

			var salida = dia.salida + 1;
			var actuales = dia.entrada - salida;
			var max = dia.max;
			dia.salida = salida;
			dia.actuales = actuales;
			if(actuales > max){
				dia.max = actuales;
			}

			var horaSalida = moment(obj.fechaDeSalida).tz('America/Mexico_City').format("H")
			var horaGrafica = dia.horaSalidas[0][horaSalida];
			dia.horaSalidas[0][horaSalida] = horaGrafica + 1; 
			dia.save(function(err){
				if (err)
					console.log(err);
			})
		})

		cb(null,obj);
	}
};

