/**
 * Notification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	priority:{
  		type:'integer',
  		required:true,
  		min:1,
  		max:5
  	},
  	message: {
  		type: 'string',
  		required:true
  	},
  	receiver_id:{
  		type:'integer'
  	},
  	link:{
  		type:'string',
  		
  	},
  	proposal_id:{
      model:'proposal'
		},
    sender_id: {
      model:'user'
    }




  }
};

