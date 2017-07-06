/**
 * Status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

	approver_id: {
			model:'user',
			required:true
		},
	status: {
			type: 'string',
			required: true
		},
	approved_at: {
			type: 'datetime',
			required: true
		},
	alloted_time_interval: {
			type: 'integer',
			required: true
		},
	proposal_id:{
		model:'proposal',
		required:true
	 }
	

  }
};

