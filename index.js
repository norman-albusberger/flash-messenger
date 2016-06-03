var FlashMessenger = require('./FlashMessenger');
var Alert = require('./Alert');

var middleware = function (req, res, next) {
	if (req.session === undefined) throw Error('flash-messenger requires sessions. Please install a session handler.');
	var fm = null;
	if (req.session.flashMessenger !== null) {
		fm = req.session.flashMessenger;
		req.session.flashMessenger = null;
	}
	else {
		fm = new FlashMessenger();
	}
	res.flashMessenger = fm;
	res.locals.flashMessenger = fm;
	req.session.flashMessenger = fm;
	next();
};
module.exports = {};
module.exports.middleware = middleware;
module.exports.Alert = Alert;