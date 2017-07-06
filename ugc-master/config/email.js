module.exports.email={
	service:"Gmail",
	auth:{
		user:"sudharsangandhi@gmail.com",
		pass:"Ilovemusic69"
	},
	from:"sudharsangandhi@gmail.com",
	templateDir: "views/emailTemplates",
	testMode:false,
	ssl:false,
	tls: {
        rejectUnauthorized: false
    }
}