'use strict';
var Alert = require('./Alert');

class FlashMessenger {

	constructor() {
		this._alerts = [];
	}

	add(alert) {
		if (Alert.prototype.isPrototypeOf(alert)) {
			this._alerts.push(alert);
			return this;
		}
		else {
			throw new Error('addMessage need an alert object as parameter');
		}
	}

	/**
	 * returns copy of alerts
	 * @returns {Array.<*>}
	 */
	get alerts() {
		return this._alerts.slice();
	}

	/**
	 *
	 * @param title
	 * @returns {Alert}
	 */
	info(title) {
		var alert = Alert.info(title);
		this.add(alert);
		return alert;
	}

	/**
	 *
	 * @param title
	 * @returns {Alert}
	 */
	error(title) {
		var alert = Alert.error(title);
		this.add(alert);
		return alert;
	}

	/**
	 *
	 * @param title
	 * @returns {Alert}
	 */
	danger(title) {
		var alert = Alert.danger(title);
		this.add(alert);
		return alert;
	}

	/**
	 *
	 * @param title
	 * @returns {Alert}
	 */
	success(title) {
		var alert = Alert.success(title);
		this.add(alert);
		return alert;
	}

}

module.exports = FlashMessenger;