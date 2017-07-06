$( "#userform" ).validate({
            rules: {
                firstname: {
                    required: true,
                    digits:false
                },
                lastname: {
                	required: true,
                	digits:false
                },
                email:{
                	required: true,
                	email: true
                },
                password: {
                	required: true,
                	minlength: 8,
                },
                confirm_password: {
                	required: true,
                	equalTo: "#password"
                },
                date_of_birth: {
                	required: true
                },
                address: {

                	required: true

                },
                city: {
                	required: true

                },
                state: {
                	required: true
                },
                pincode:
                {
                	required: true,
                	maxlength: 6,
                	digits: true
                },
                gender:
                {
                	required: true
                },
                aadhar_number:
                {
                	required: true,
                	minlength: 12,
                	maxlength: 12
                },
                contact_no: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                }
            },
            messages:{
            	firstname:{
            		required:"This Field is required",
            		digits: "Numbers should not be there"
            	},
            	lastname: {
            		required:"This Field is required",
            		digits: "NUmbers should not be there"
            	},
            	email: {
            		required:"This Field is required",
            		email: "Email should be valid"
            	},
            	password: {
            		required: "This field is required",
            		minlength: "Password should contain 8 letters",
            		digits: "atleast one number should be present"
            	},
            	confirm_password: {
            		required:"This Field is required",
            		equalTo: "Password is not matched"

            	},
            	date_of_birth: {
            		required: "This field is required"

            	},
            	address: {
            		required:"This Field is required"
            	},
            	city: {
            		required:"This Field is required"
            	},
            	state: {
            		required:"This Field is required"
            	},
            	pincode: {
            		required:"This Field is required",
            		maxlength:"Maximum length is 6"

            	},
            	gender: {
            		required:"This Field is required"
            	},
            	aadhar_number: {
            		required:"This Field is required"
            	},
            	contact_no : {
            		required:"This Field is required"
            	}
            }


        });