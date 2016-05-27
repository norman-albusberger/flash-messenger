var FlashMessenger = require('./FlashMessenger');
var Alert = require('./Alert');

var middleware = function (req,res,next) {
	var fm = new FlashMessenger();
	res.flashMessenger = fm;
	res.locals.flashMessenger = fm;
	next();
};
module.exports = {};
module.exports.middleware = middleware;
module.exports.Alert = Alert;