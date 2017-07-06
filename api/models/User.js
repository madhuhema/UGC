/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	firstname:{
  		type:'string',
  		required:true
  	},
  	lastname:{
  		type:'string',
  		required:true
  	},
  	middlename:{
  		type:'string'
  	},
  	gender:{
  		type:'string',
  		required:true
  	},
  	date_of_birth:{
  		type:'datetime',
  		required:true
  	},
  	email:{
  		type:'string',
  		email:true,
  		required:true,
  		unique:true
  	},
  	password:{
  		type:'string',
  		required:true
  	},
  	contact_no:{
  		type:'string',
      numeric:true,
  		required:true,
  		unique:true
  	},
    address:{
      type:'string',
      required:true,
      maxLength:100,
      minLength:5
    },
  	aadhar_number:{
  		type:'string',
  		numeric:true,
  		required:true,
  		minLength: 12,
  		maxLength: 12
  	},
  	city:{
  		type:'string',
  		required:'true'
  	},
  	state:{
        type:'string',
        required:true
  	},
  	pincode:{
  		type:'integer',
  		required:true
  	},
  	role:{
      type:'string',
      required:true
    },
    admin_security_key:{
      type:'string'
    },
    
    profile:{
      collection:'profile',
      via:'owner'
    },
    proposals:{
      collection:'proposal',
      via:'owner'
    },
    updates:{
      collection:'update',
      via:'owner'
    },
    notifications:{
      collection:'notification',
      via:'sender_id'
    },
    status:{
      collection:'status',
      via:'approver_id'
    }
  },
    beforeCreate:function(values,next){
    console.log('inside beforeCreate');
     require('bcrypt').hash(values.password,10,function passwordEncrypted(err,encryptedPassword){
        if (err) throw next(err);
           values.password = encryptedPassword;
           console.log('password encrypted');
           next();
        });
      }
    
}