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
	{clave: "A001", nombre: "Alhajero",	descripcion: "Para viaje con cierre", precio: "Preguntar",iap: "0236"},
	{clave: "A003", nombre: "Aretero",	descripcion: "", 			precio: "Preguntar",iap: "0236"},
	{clave: "A005", nombre: "Alhajero",	descripcion: "Grande",		precio: "Preguntar",iap: "0236"},
	{clave: "A006", nombre: "Agarradera",descripcion: "Tela",		precio: "Preguntar",iap: "0236"},
	{clave: "A007", nombre: "Alhajero",	descripcion: "Redondo",		precio: "Preguntar",iap: "0236"},
	{clave: "A009", nombre: "Almohada",	descripcion: "Bebé",		precio: "Preguntar",iap: "0236"},
	{clave: "B001", nombre: "Babero",	descripcion: "Niño",		precio: "Preguntar",iap: "0236"},
	{clave: "B002", nombre: "Basurero",	descripcion: "Coche",		precio: "Preguntar",iap: "0236"},
	{clave: "B003", nombre: "Bolsa",	descripcion: "Cristal",		precio: "Preguntar",iap: "0236"},
	{clave: "B004", nombre: "Bolsa",	descripcion: "Cristal mini",	precio: "Preguntar",iap: "0236"},
	{clave: "B005", nombre: "Bolsa",	descripcion: "Agujas",		precio: "Preguntar",iap: "0236"},
	{clave: "B008", nombre: "Bolsa",	descripcion: "Para Pan",	precio: "Preguntar",iap: "0236"},
	{clave: "P064", nombre: "Pañalera",	descripcion: "Porta Pañal",		precio: "Preguntar",iap: "0236"},
	{clave: "P073", nombre: "Pañalera",	descripcion: "Espaldera Tela",		precio: "Preguntar",iap: "0236"},
	{clave: "P075", nombre: "Pañalera",	descripcion: "Redonda Tela",		precio: "Preguntar",iap: "0236"},
	{clave: "P077", nombre: "Pañalera",	descripcion: "Mediana Tela EUA",		precio: "Preguntar",iap: "0236"},
	{clave: "P097", nombre: "Porta botella", descripcion: "Tela",		precio: "Preguntar",iap: "0236"},
	{clave: "P099", nombre: "Porta cubiertos",	descripcion: "Fieltro",		precio: "Preguntar",iap: "0236"},
	{clave: "T001", nombre: "Tortillero",	descripcion: "Tela",		precio: "Preguntar",iap: "0236"},
	{clave: "P016", nombre: "Porta monedas", descripcion: "",	precio: "Preguntar",iap: "0236"},
	{clave: "P017", nombre: "Pañalera",	descripcion: "Económica, Verde", precio: "Preguntar",iap: "0236"},
	{clave: "P018", nombre: "Porta rollo",	descripcion: "",		precio: "Preguntar",iap: "0236"},
	{clave: "P019", nombre: "Porta tijeras", descripcion: "", precio: "Preguntar",iap: "0236"},
	{clave: "P025", nombre: "Porta folio",	descripcion: "Diamante", precio: "Preguntar",iap: "0236"},
	{clave: "P036", nombre: "Porta Traje", 	descripcion: "Escosés",		precio: "Preguntar",iap: "0236"},
	{clave: "P039", nombre: "Guarda polvo",	descripcion: "en forma de Patita",		precio: "Preguntar",iap: "0236"},
	{clave: "P053", nombre: "Porta Cepillo",	descripcion: "Caballero",		precio: "Preguntar",iap: "0236"},
	{clave: "P054", nombre: "Porta lentes",	descripcion: "Caballero",		precio: "Preguntar",iap: "0236"},
	{clave: "P059", nombre: "Pañalera",	descripcion: "Ecnonómica, Azul",		precio: "Preguntar",iap: "0236"},
	{clave: "B010", nombre: "Bolsa", descripcion:	"Tejido",		precio: "Preguntar",iap: "0236"},
	{clave: "B011", nombre: "Bolsa", descripcion:	"Tejido y Agujas",		precio: "Preguntar",iap: "0236"},
	{clave: "B012", nombre: "Bolsa", descripcion:	"Tejido Grande",		precio: "Preguntar",iap: "0236"},
	{clave: "B013", nombre: "Bolsa", descripcion:	"Japonesa Grande",		precio: "Preguntar",iap: "0236"},
	{clave: "B014", nombre: "Bolsa", descripcion:	"Japonesa Mediana",		precio: "Preguntar",iap: "0236"},
	{clave: "B015", nombre: "Bata", descripcion:	"Bebé",		precio: "Preguntar",iap: "0236"},
	{clave: "B026", nombre: "Bata", descripcion:	"Pintor",		precio: "Preguntar",iap: "0236"},
	{clave: "B027", nombre: "Babero", descripcion:	"Señor",		precio: "Preguntar",iap: "0236"},
	{clave: "B035", nombre: "Babero", descripcion:	"Pique",		precio: "Preguntar",iap: "0236"},
	{clave: "B036", nombre: "Bolsa", descripcion:	"Combinada",		precio: "Preguntar",iap: "0236"},
	{clave: "B039", nombre: "Bolsa", descripcion:	"Para Regalo",		precio: "Preguntar",iap: "0236"},
	{clave: "B040", nombre: "Bolsa", descripcion:	"Cristal Transparente",		precio: "Preguntar",iap: "0236"},
	{clave: "GS01", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño chico, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS02", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño chico, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS03", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño chico, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS04", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño grande, 1 Kg.",	precio: "Preguntar",iap: "0472"},
	{clave: "GS05", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño grande, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS06", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar, tamaño grande, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS07", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño chico, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS08", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño chico, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS09", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño chico, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS10", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño grande, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS11", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño grande, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS12", nombre: "Galleta sándwich",	descripcion: "Mermelada fresa y azúcar glass, tamaño grande, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS13", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño chico, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS14", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño chico, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS15", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño chico, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS16", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño grande, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS17", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño grande, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GS18", nombre: "Galleta sándwich",	descripcion: "Mermelada de chabacano, tamaño grande, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA01", nombre: "Garabato", descripcion: "Chocolate, tamaño chico, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA02", nombre: "Garabato", descripcion: "Chocolate, tamaño chico, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA03", nombre: "Garabato", descripcion: "Chocolate, tamaño chico, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA04", nombre: "Garabato", descripcion: "Chocolate, tamaño grande, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA05", nombre: "Garabato", descripcion: "Chocolate, tamaño grande, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GA06", nombre: "Garabato", descripcion: "Chocolate, tamaño grande, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GE01", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño chico, 1 Kg.",	precio: "Preguntar",iap: "0472"},
	{clave: "GE02", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño chico, 1/2 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GE03", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño chico, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GE04", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño grande, 1 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "GE05", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño grande, 1/2 Kg.",	precio: "Preguntar",iap: "0472"},
	{clave: "GE06", nombre: "Galleta sencilla", descripcion: "Sin relleno, sin decoración, tamaño grande, 1/4 Kg.",		precio: "Preguntar",iap: "0472"},
	{clave: "TT01", nombre: "Tamal Tradicional", descripcion: "Verde", precio: "10.00",iap: "0810"},
	{clave: "TT02", nombre: "Tamal Tradicional", descripcion: "Rojo", precio: "10.00",iap: "0810"},
	{clave: "TT03", nombre: "Tamal Tradicional", descripcion: "Rajas con queso"	, precio: "10.00",iap: "0810"},
	{clave: "TT04", nombre: "Tamal Tradicional", descripcion: "Espinacas con queso", precio: "10.00",iap: "0810"},
	{clave: "TT05", nombre: "Tamal Tradicional", descripcion: "Calabacita", precio: "10.00",iap: "0810"},
	{clave: "TT06", nombre: "Tamal Tradicional", descripcion: "Fresa", precio: "10.00",iap: "0810"},
	{clave: "TT07", nombre: "Tamal Tradicional", descripcion: "Piña", precio: "10.00",iap: "0810"},
	{clave: "TT08", nombre: "Tamal Tradicional", descripcion: "Chocolate con fresa", precio: "10.00",iap: "0810"},
	{clave: "TB01", nombre: "Tamal Botanero",  	 descripcion:"Verde",		precio: "8.50", iap: "0810"},
	{clave: "TB02", nombre: "Tamal Botanero", 	descripcion: "Rojo",	precio: "8.50", iap: "0810"},
	{clave: "TB03", nombre: "Tamal Botanero", 	descripcion: "Rajas con queso",		precio: "8.50", iap: "0810"},
	{clave: "TB04", nombre: "Tamal Botanero", 	descripcion: "Espinaca con queso",		precio: "8.50", iap: "0810"},
	{clave: "TB05", nombre: "Tamal Botanero", 	descripcion: "Calabacita",	precio: "8.50", iap: "0810"},
	{clave: "TB06", nombre: "Tamal Botanero", 	descripcion: "Fresa",	precio: "8.50", iap: "0810"},
	{clave: "TB07", nombre: "Tamal Botanero", 	descripcion: "Piña",	precio: "8.50", iap: "0810"},
	{clave: "TB08", nombre: "Tamal Botanero", 	descripcion: "Chocolate con fresa",		precio: "8.50",iap: "0810"},
	{clave: "TO01", nombre: "Tamal Oaxaqueño", 	descripcion: "Pollo con mole o salsa roja"		, precio: "11.00",iap: "0810"},
	{clave: "TO02", nombre: "Tamal Oaxaqueño",	descripcion: "Pollo con salsa verde"		, precio: "11.00",iap: "0810"},
	{clave: "AP01", nombre: "Caballito de Palo",	descripcion: "Caramelin" , precio: "190.00" ,iap: "0227"},
	{clave: "AP02", nombre: "Caballito de Palo",	descripcion: "Monti", precio: "190.00" ,iap: "0227"},
	{clave: "AP03", nombre: "Cojín",	descripcion: "Aromaterapia Cuello" ,precio: "475.00" ,iap: "0227"},
	{clave: "AP04", nombre: "Cojín",	descripcion: "Aromaterapia" ,precio: "475.00" ,iap: "0227"},
	{clave: "AP05", nombre: "Cojín",	descripcion: "Borreguín" ,precio: "215.00" ,iap: "0227"},
	{clave: "AP06", nombre: "Cojín",	descripcion: "Catarina" ,precio: "263.75" ,iap: "0227"},
	{clave: "AP07", nombre: "Cojín",	descripcion: "Jirafa" ,precio: "215.00" ,iap: "0227"},
	{clave: "AP08", nombre: "Cojín",	descripcion: "Vaca" ,precio: "215.00" ,iap: "0227"},
	{clave: "AP09", nombre: "Galletas",	descripcion: "Cilindro",	precio: "85.00",iap: "0227"},
	{clave: "AP10", nombre: "Galletas",	descripcion: "Regalo" ,precio: "125.00" ,iap: "0227"},
	{clave: "AP11", nombre: "Nacimiento",	descripcion: "Peques" ,precio: "130.00" ,iap: "0227"},
	{clave: "AP12", nombre: "Nacimiento",	descripcion: "Regular" ,precio: "470.00" ,iap: "0227"},
	{clave: "AP13", nombre: "Peluche",	descripcion: "Coco Loco" ,precio: "265.00" ,iap: "0227"},
	{clave: "AP14", nombre: "Peluche",	descripcion: "Nina muñequina" ,precio: "215.00" ,iap: "0227"},
	{clave: "AP15", nombre: "Peluche",	descripcion: "Memin Muñequin" ,precio: "215.00" ,iap: "0227"},
	{clave: "AP16", nombre: "Tortillero de semillas rojo",	descripcion: "", precio: "160.00" ,iap: "0227"},
	{clave: "AP17", nombre: "Tortillero de semillas morado", descripcion: "", precio: "160.00" ,iap: "0227"},
	{clave: "AP18", nombre: "Bolsa",	descripcion: "Happy Stars",		precio: "105.00", iap: "0228"},
	{clave: "AP19", nombre: "Bolsa",	descripcion: "Luna Lunera", precio: "75.00", iap: "0229"},
	{clave: "AP20", nombre: "Bolsa",	descripcion: "Lagartijín y amigos", precio: "55.00", iap: "0230"},
	{clave: "AP21", nombre: "Delantal",	descripcion: "Amore mío" ,precio: "160.00" ,iap: "0231"},
	{clave: "AP22", nombre: "Delantal",	descripcion: "Tamo" ,precio: "160.00" ,iap: "0232"},
	{clave: "AP23", nombre: "Estampa",	descripcion: "Borreguín de la suerte y abundancia", precio: "35.00",iap: "0233"},
	{clave: "AP24", nombre: "Estampa",	descripcion: "Dino Dino",		 precio: "35.00",iap: "0234"},
	{clave: "AP25", nombre: "Lápiz",	descripcion: "Cerdilápiz",		 precio: "35.00",iap: "0235"},
	{clave: "AP26", nombre: "Lápiz",	descripcion: "Dalmilápiz",		 precio: "35.00",iap: "0236"},
	{clave: "AP27", nombre: "Lápiz",	descripcion: "Croac",		precio: "35.00",iap: "0237"},
	{clave: "AP28", nombre: "Pluma",	descripcion: "Luna",		precio: "35.00",iap: "0238"},
	{clave: "AP29", nombre: "Estampa",	descripcion: "Amorosos",		precio: "65.00",iap: "0239"},
	{clave: "AP30", nombre: "Llavero",	descripcion: "con Estilo",	precio: "65.00",iap: "0240"},
	{clave: "AP31", nombre: "Llavero",	descripcion: "Tigrín",		precio: "35.00",iap: "0241"},
	{clave: "AP32", nombre: "Peluche",	descripcion: "Gallito Feliz", precio: "215.00" ,iap: "0242"},
	{clave: "AP33", nombre: "Peluche",	descripcion: "Pato Patín", precio: "215.00" ,iap: "0243"}]

	Producto.count().exec(function(err, count){
		if(err) return cb(err);

		if(count > 0) return cb();

		Producto.create(productos).exec(cb);
	});



  	//cb();

};
