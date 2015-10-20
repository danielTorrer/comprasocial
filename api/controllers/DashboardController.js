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
			return res.view({productos: productos });
		});

	},

	mas: function(req, res){
		res.view('');
	},

	iap: function(req, res){
		Iap.find(req.params.id)
			.populate('productos')
			.exec(function(err, iap){
				if (err)
					console.log(err);
				console.log(iap);
				return res.view({iap: iap});
			});
	}

};
