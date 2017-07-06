/**
 * Update.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	project_status: {
			type: 'string',
			required: true
		},
	amount: {
			type: 'integer',
			min:1000,
			required: true
		},
	owner: {
			model:'user',
			required:true
		}	

  }
};

