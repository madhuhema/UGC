/**
 * UpdateController
 *
 * @description :: Server-side logic for managing updates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		// req.session.authenticated="false";
		console.log(req.session);
		User.findOne(req.param('id'), function (err,update){
			res.view({
				update:update
			});
		});
	},

	create:function(req,res,next){
			User.create(req.params.all(),function customerUpdated(err,update){
				if (err){
					 return res.redirect('/update/new')
					}
					res.redirect('/update/show/'+update.owner);
				
		});
	},
	show:function(req,res,next){
		User.findOne(req.param('id')).populateAll().exec( function (err,update){
			if (err) throw next(err)
				res.view({
					update:update
				});
		});
	},
	edit: function(req,res,next){
		User.findOne(req.param('id'), function foundUser (err,update){
			if(err) return next(err);
			
			res.view({
				update:update
			});
		});
	},
	update: function(req,res,next){
		User.update(req.param('id'),req.params.all(),function userUpdated (err){
			if(err){
				return res.redirect('/update/edit/' +req.param('id'));
			}
			res.redirect('update/show/' +req.param('id'));
		});
	}  

	
};

