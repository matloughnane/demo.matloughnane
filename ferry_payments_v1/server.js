var express = require("express");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/test_ferry_tickets')

var date = new Date("2015-07-19, 19:00");

// var singleTicketScheme = {
// 	name:String,
// 	email:String,
// 	phone: NumberLong,
// 	"ticket": {
// 		"return": false,
// 		"outbound_sailing": {
// 			"departing": "da",
// 			"time": "2015-07-19",
// 			"time": "13:00",
// 			"redeemed": false,
// 			"expired": false
// 		},
// 		"passengers": 2,
// 		"car": true,
// 		"stripe": false
// 	}
// }

var customerSchema = {
	name: String,
	email: String,
	phone: Number
}

var Customer = mongoose.model('Customer', customerSchema, 'customers')

var app = express()

app.get('/customers', function (req, res) {
	Customer.findOne(function (err, doc){
		res.send(doc);
	})
})

app.listen(3000);
