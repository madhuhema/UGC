/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'send': function(req, res) {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
	    sails.hooks.email.send(
	      "email", {
	        recipientName: "Joe",
	        senderName: "Sue"
	      }, {
	        to: "phoenixvino1@gmail.com",
	        subject: "Hi there"
	      },
	      function(err) {
	        if (err) {return res.serverError(err);}
	        res.redirect('/email/show');
	      }
	    );
	  },
  	'show': function(req, res) {
	    var path = require('path');
	    require('fs').readFile(path.resolve(__dirname,"..","..",".tmp","email.txt"), {encoding:"utf8"}, function(err, text) {
	      if (err) {return res.serverError(err);}
	      res.set("Content-Type","text/plain");
	      return res.ok(text);
	    });
	  }
};

