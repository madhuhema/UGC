/**
 * StatusController
 *
 * @description :: Server-side logic for managing statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		// req.session.authenticated="false";
		// console.log(req.session);
			User.findOne(req.param('id')).exec(function foundUser(err,status){
				if(err) res.redirect('/');
				res.view({
					status:status
				});
		});
		
	},

	create:function(req,res,next){
			Status.create(req.params.all(),function customerCreated(err,status){
				if (err) return next(err)
				res.redirect('/status/show'+ status.approver_id);
		});
	},
	show:function(req,res,next){
		Status.findOne(req.param('id'),function foundUser (err,status){
			if (err) throw next(err)
				Proposal.findOne(status.proposal_id),foundUser (err,proposal)
				res.view({
					status:status,
					proposal:proposal
				});
		});
	},
	edit: function(req,res,next){
		Status.findOne(req.param('id'), function foundUser (err,status){
			if(err) return next(err);
			
			res.view({
				status:status
			});
		});
	},
	update: function(req,res,next){
		Status.update(req.param('id'),req.params.all(),function userUpdated (err){
			if(err){
				return res.redirect('/status/edit/' +req.param('id'));
			}
			res.redirect('status/show/' +req.param('id'));
		});
	} 
	
};

