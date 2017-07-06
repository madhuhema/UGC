$("#proposalform").validate({
//specify the validation rules
rules: {
project_title: {
	required: true
},
broad_subject: {
	required: true
},
estimated_budget: {
	required: true,
	digits:true
},
project_duration: {
	required: true
},

abstract: {
	required: true
},

college_account_number: {
	required: true
},

undertaking_college_name: {
	required: true
},

college_approval_status: {
	required: true
}
},
 
//specify validation error messages
messages: {

project_title: {
required: "This field cannot be blank!"
},
broad_subject: {
required: "This field cannot be blank!"
},

estimated_budget: {
required: "This field cannot be blank!",
digits: " should contain digits"
},

project_duration: {
required: "This field cannot be blank!"
},
abstract: {
required: "This field cannot be blank!"
},

college_account_number: {
required: "This field cannot be blank!"
},

undertaking_college_name: {
required: "This field cannot be blank!"
},

college_approval_status: {
required: "This field cannot be blank!"
}
}

 
});