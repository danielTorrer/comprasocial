/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	var dummy = {
		username: 'daniel',
		password: 'lalala'
	};

	User.count().exec(function(err, count){
		if(err) return cb(err);

		if(count > 0) return cb();

		User.create(dummy).exec(cb);
	});

	var iap = [
		{ expediente: '0472',
			nombre: 'INSTITUCIÓN CONFE A FAVOR DE LA PERSONA CON DISCAPACIDAD INTELECTUAL, I.A.P.',
			tel : '52921392',
			descripcion: 	'Nuestras galletas además de deliciosas son especiales pues están hechas de manera artesanal por personas con discapacidad intelectual. Nuestros trabajadores con discapacidad intelectual han sido cuidadosamente capacitados para el trabajo. Por sus habilidades manuales, capacidad de concentración, compromiso con su trabajo y compañerismo, estas personas son trabajadores sobresalientes que entregan resultados de muy alta calidad.' +
			 '\n Al mandar a hacer o comprar nuestras galletas, no sólo quedará fascinado por su sabor, si no que además estará apoyando la formación profesional e integración de personas con discapacidad intelectual.\n Lo invitamos a que pruebe nuestras galletas y se enamore de la causa y su rico sabor.',
			direccion:	'Carretera México Toluca No. 5218 Sn Col. El Yaqui C.P. 05320 Cuajimalpa Distrito Federal',
			rubro:	'DISCAPACIDAD Y REHABILITACIÓN',
			pagina:	'http://www.confe.org.mx/'
		},
		{
			expediente: '0810',
			nombre: 'DAUNIS, GENTE EXCEPCIONAL, I.A.P.',
			tel : '	55741122',
			descripcion: 	'Contamos con las mejores prácticas e instalaciones de la industria alimenticia, diseñadas para que cualquier persona con discapacidad intelectual pueda capacitarse. La mayoría de nuestros procesos se realizan de manera manual para el desarrollo integral del muchacho.' +
				'\nNuestros procesos de producción se han organizado en áreas operativas.' +
				'\nCada una de estas áreas nos sirve para que los capacitados estructuren mentalmente todo el proceso. A través de fotografías ubicadas en cada área buscamos:'+
				'\n\t- Que cada fotografía describa el proceso de fabricación'+
				'\n\t- Que cada muchacho pueda planificar su trabajo con ayuda de las fotografías'+
				'\n\t- Tenemos identificados más de 250 pasos' +
				'\n\t- La capacitación está enfocada en: PENSAMIENTO, AFECTIVIDAD, COMUNICACIÓN Y AUTONOMÍA.',
			direccion: 'San Luis Potosí No. 101, Int. Local A, Col. Roma Norte, C.P.: 06700, Del. Cuauhtémoc, México Distrito Federal',
			rubro:	'DISCAPACIDAD Y REHABILITACIÓN',
			pagina: 'http://www.daunis.org.mx/'
		},

		{
			expediente: '0236',
			nombre: 'LOS SESENTA, I.A.P.',
			tel : '55633645, 56117007, 56150856',
			descripcion: 'Artículos de tela: delantal, pañalera, cosmetiquera, pantuflas, juegos de baño, maletas, bolsas, basurero para coche, guardatodo.' +
				'\nHa sido precisamente la buena calidad y presentación de nuestros artículos que hemos podido venderlos en los mejores almacenes de nuestro país, como son: LIVERPOOL, SEARS, Y PALACIO DE HIERRO.'+
				'\nAdemás contamos con una tienda abierta a todo el publico en nuestras oficinas de la Colonia Mixcoac.',
			direccion: 'Leonardo da Vinci No. 185 S/N Col. Mixcoac C.P. 03910 Benito Juárez Distrito Federal',
			rubro:	'ADULTOS MAYORES',
			pagina: 'http://www.sesenta.iap.org.mx/'
		},
		{
			expediente: '0227',
			nombre: 'APAC, I.A.P. ASOCIACION PRO PERSONAS CON PARALISIS CEREBRAL',
			tel : '5591724620',
			descripcion: 	'Juguetes de tela, galletas, dulces, artículos promocionales para la oficina  (termos, agendas, etc., que no son elaborados por ellos).',
			direccion: 'Dr. Fernando Zarraga No.27  Col. Doctores C.P. 06720 Cuauhtémoc Distrito Federal',
			rubro: 'DISCAPACIDAD Y REHABILITACIÓN'
		}
];

	Iap.count().exec(function(err, count){
		if(err) return cb(err);

		if(count > 0) return cb();

		Iap.create(iap).exec(cb);
	});

	var productos = [
		{ clave: "A005", nombre: "Alhajero", descripcion:	"Grande", precio: "Preguntar", iap:	"0236" },
		{ clave: "A006",	nombre: "Agarradera", descripcion:	"Tela", precio: "Preguntar", iap:	"0236" },
		{ clave: "A007",	nombre: "Alhajero", descripcion:	"Redondo", precio: "Preguntar", iap:	"0236" },
		{ clave: "A009",	nombre: "Almohada", descripcion:	"Bebé", precio: "Preguntar", iap:	"0236" }
	];

	Producto.count().exec(function(err, count){
		if(err) return cb(err);

		if(count > 0) return cb();

		Producto.create(productos).exec(cb);
	});



  	//cb();

};
