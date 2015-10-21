/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function(req, res){
		Producto.find()
		.populate('iap')
		.exec(function(err, productos){
			return res.view({productos: productos, title: 'Productos' });
		});

	},

	acerca: function(req, res){
		res.view({title: 'Acerca de'});
	},

	iap: function(req, res){
		Iap.find(req.params.id)
			.populate('productos')
			.exec(function(err, iap){
				if (err)
					console.log(err);
				return res.view({iap: iap, title: iap[0].nombre});
			});
	},

	iapAll:function(req, res){
		Iap.find()
			.exec(function(err, iap){
				return res.view({iaps: iap, title: 'IAP'});
			})
	}

};
