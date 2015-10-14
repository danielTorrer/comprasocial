/**
* Dia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');

module.exports = {

	attributes: {
		
		dia: {
			type: 'string',
			unique: true
		},

		max: {
			type: 'integer',
			defaultsTo: 0
		},

		prom:{
			type: 'integer',
			defaultsTo: 0
		},

		entrada: {
			type: 'integer',
			defaultsTo: 0
		},

		salida: {
			type: 'integer',
			defaultsTo: 0
		},

		actuales:{
			type: 'integer',
			defaultsTo: 0
		},

		horaEntradas: {
			type: 'array',
			defaultsTo: [{
				"0": 0,
				"1": 0,
				"2": 0,
				"3": 0,
				"4": 0,
				"5": 0,
				"6": 0,
				"7": 0,
				"8": 0,
				"9": 0,
				"10": 0,
				"11": 0,
				"12": 0,
				"13": 0,
				"14": 0,
				"15": 0,
				"16": 0,
				"17": 0,
				"18": 0,
				"19": 0,
				"20": 0,
				"21": 0,
				"22": 0,
				"23": 0,
			}]
		},

		horaSalidas: {
			type: 'array',
			defaultsTo: [{
				"0": 0,
				"1": 0,
				"2": 0,
				"3": 0,
				"4": 0,
				"5": 0,
				"6": 0,
				"7": 0,
				"8": 0,
				"9": 0,
				"10": 0,
				"11": 0,
				"12": 0,
				"13": 0,
				"14": 0,
				"15": 0,
				"16": 0,
				"17": 0,
				"18": 0,
				"19": 0,
				"20": 0,
				"21": 0,
				"22": 0,
				"23": 0,
			}]
		},		

	},

	beforeCreate: function(obj, cb){
		var fecha = moment().tz('America/Mexico_City').format("DD-MM-YYYY").toString();
		obj.dia = fecha;

		cb(null, obj);
	}
};

