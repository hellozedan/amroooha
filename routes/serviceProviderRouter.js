/**
 * Created by ahmad on 17/07/2017.
 */
var express = require('express');


var routes = function () {
	var serviceProviderRouter = express.Router();

	var serviceProviderController = require("../controllers/serviceProviderController")();

	serviceProviderRouter.route('/')
		.post(serviceProviderController.post);
	return serviceProviderRouter;
};

module.exports = routes;
