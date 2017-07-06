/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		qualification: {
			type: 'string',
			required: true
		},
		area_of_specialization: {
			type:'string',
			required:true
		},
		college_name:{
  		    type:'string',
  		    required:true
  	    },
       college_email:{
    	    type:'string',
    	    email:true,
    	    required:true
        },
       college_phone_no:{
    	type:'string',
    	required: true
    
        },
        designation: {
			type: 'string',
			required: true
		},
		teaching_experience: {
			type: 'integer',
			min:1,
			required: true
		},
		research_experience: {
			type: 'integer',
			min:1,
			required: false
		},

		doctrate_degree_year: {
			type: 'integer',
            required: true
		},  
		doctrate_degree_title: {
			type: 'string',
			required: true
		},
		retired: {
			type: 'boolean',
			required: true
		},
		
		papers_published:{
			type:'integer',
			min:0
		},
		papers_accepted: {
			type: 'integer',
			min:0

		},
		papers_communicated: {
			type: 'integer',
			min:0
		},
		book_published:{
			type:'integer',
			min:0
		},
		book_accepted: {
			type: 'integer',
			min:0

		},
		book_communicated: {
			type: 'integer',
			min:0
		},

		owner:{
			model:'user',
			required:true
		}

  }
};

