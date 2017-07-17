/**
 * Created by ahmad on 17/07/2017.
 */

var serviceProviderModel = require('../models/serviceProviderModel');

var serviceProviderController = function () {

	var post = function (req, res) {
		var serviceProvider=req.body;
		 serviceProvider=new serviceProviderModel(serviceProvider);
		serviceProvider.save(function (e) {
			if (e) {
				res.status(500).send();
			} else {
				res.status(201).json(serviceProvider);
			}
		})
	};


	return {
		post: post
	};

};
module.exports = serviceProviderController;
