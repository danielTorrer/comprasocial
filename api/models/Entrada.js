/**
* Entrada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment-timezone');

module.exports = {
	
	attributes: {
		fechaDeEntrada : {
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

		obj.fechaDeEntrada = moment().tz('America/Mexico_City').format();
		cb(null, obj);
	},

	afterCreate: function(obj,cb){
		
		Dia.findOne({ dia: moment().tz('America/Mexico_City').format("DD-MM-YYYY").toString()})
		.exec(function findOneDia(err, dia){

			if (err) { console.log(err); }
			if (!dia) { 
				Dia.create({dia: moment().tz('America/Mexico_City').format('DD-MM-YYYY').toString()})
			}

			var entrada = dia.entrada + 1;
			var actuales = entrada - dia.salida;
			var max = dia.max;
			dia.entrada = entrada;
			dia.actuales = actuales;
			if(actuales > max){
				dia.max = actuales;
			}

			var horaEntrada = moment(obj.fechaDeEntrada).tz('America/Mexico_City').format("H")
			var horaGrafica = dia.horaEntradas[0][horaEntrada];
			dia.horaEntradas[0][horaEntrada] = horaGrafica + 1; 
			dia.save(function(err){
				if (err)
					console.log(err);
			})
		})

		cb(null,obj);
	}
};

