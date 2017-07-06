/**
 * NotificationController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		// req.session.authenticated="false";
		console.log(req.session);
		User.findOne(req.param('id'), function (err,user){
			res.view({
				user:notification
			});
		});
	},

	create:function(req,res,next){
			User.create(req.params.all(),function customerCreated(err,user){
				if (err){
					 return res.redirect('/notification/new')
					}
					res.redirect('/notification/show/'+notification.owner);
				
		});
	},
	show:function(req,res,next){
		Notification.find({receiver_id:req.param('id')}, function (err,notifications){
			if (err) throw next(err)
				res.view({
					notifications:notifications
				});
		});
	},
	edit: function(req,res,next){
		User.findOne(req.param('id'), function foundUser (err,user){
			if(err) return next(err);
			res.view({
				user:notification
			});
		});
	},
	update: function(req,res,next){
		User.update(req.param('id'),req.params.all(),function userUpdated (err){
			if(err){
				return res.redirect('/notification/edit/' +req.param('id'));
			}
			res.redirect('notification/show/' +req.param('id'));
		});
	},
	addNotification:function(values,next){
		console.log('values'+JSON.stringify(values));
		Notification.create(values,function notificationAdded(err,notification){
			console.log('err'+JSON.stringify(err));
			console.log('notification'+JSON.stringify(notification));
			if (err) return next(err);
				return true;
		})
		
	}  

	
};

