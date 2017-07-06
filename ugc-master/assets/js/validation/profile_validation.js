$("#profile").validate({
// rules specification for profile
rules: {
area_of_specialization: {
	required: true
},
qualification: {
	required: true
},
designation: {
	required: true
},
college_name: {
	required: true
},

college_phone_number: {
	required: true,
	minlength: 10,
	maxlength: 10,
	digits: true
},

college_email: {
	required: true,
	email: true
},

retired: {
	required: true
},

teaching_experience: {
	required: true,
	digits: true
},

research_experience: {
	required: true,
	digits: true
},

doctrate_degree_year: {
	required: true,
	digits: true,
	maxlength: 4
},
doctrate_degree_title: {
	required: true,
	digits: false
},

papers_published: {
	required: true,
	digits: true

},
papers_accepted: {
	required: true,
	digits: true
},
papers_communicated: {
	required: true,
	digits: true
},
book_published: {
	required: true,
	digits: true
},

filebutton: {
	required: true
}
},
 
//specify validation error messages
messages: {

area_of_specialization: {
required: "This field cannot be blank!"
},
qualification: {
required: "This field cannot be blank!"
},

designation: {
required: "This field cannot be blank!"
},

college_name: {
required: "This field cannot be blank!"
},
college_phone_number: {
required: "This field cannot be blank!",
minlength: "Should contain 10 numbers",
maxlength: "should contain 10 numbers",
digits: " should contain digits"
},

college_email: {
required: "This field cannot be blank!"
},

retired: {
required: "This field cannot be blank!"
},

teaching_experience: {
required: "This field cannot be blank!",
digits: " should contain digits"
},

research_experience: {
required: "This field cannot be blank!",
digits: " should contain digits"
},

doctrate_degree_year: {
required: "This field cannot be blank!",
digits: " should contain digits",
maxlength: "Should be in 4 digits"
},

doctrate_degree_title: {
required: "This field cannot be blank!"
},

papers_published: {
required: "This field cannot be blank!",
digits:"Should contain numbers"
},

papers_accepted: {
required: "This field cannot be blank!",
digits: " should contain digits"
},

papers_communicated: {
required: "This field cannot be blank!",
digits: " should contain digits"
},

book_published: {
required: "This field cannot be blank!",
digits:"Should contain numbers"
},

filebutton: {
required: "This field cannot be blank!"
}

}

 
});